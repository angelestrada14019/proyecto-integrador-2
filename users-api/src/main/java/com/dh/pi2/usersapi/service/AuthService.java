package com.dh.pi2.usersapi.service;

import com.dh.pi2.usersapi.dto.*;
import com.dh.pi2.usersapi.entity.User;
import com.dh.pi2.usersapi.exceptions.BadRequestException;
import com.dh.pi2.usersapi.mapper.UserMapper;
import com.dh.pi2.usersapi.repository.UserCredentialRepository;
import com.dh.pi2.usersapi.repository.UserTypeRepository;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {
    @Autowired
    private UserCredentialRepository userCredentialRepository;

    @Autowired
    private UserTypeRepository userTypeRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    public UserResponseToken login(AuthRequest authRequest) throws BadRequestException {
        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        if (authenticate.isAuthenticated()){
            User user1 = userCredentialRepository.findByEmail(authRequest.getUsername()).orElseThrow();
            String token = generateToken(authRequest.getUsername());
            UserResponseToken usuarioAutenticado = userMapper.mapResponseToken(user1);
            usuarioAutenticado.setToken(token);
            return usuarioAutenticado;
        }else {
            throw new BadRequestException("email or password incorrect");
        }
    }


    public UserResponseToken saveUser(User credential) throws BadRequestException {
        if (userCredentialRepository.findByEmail(credential.getEmail()).isPresent()) {
            throw new BadRequestException("Ese email ya ha sido utilizado");
        }
        credential.setPassword(passwordEncoder.encode(credential.getPassword()));
        userCredentialRepository.save(credential);
        UserResponseToken nuevoUser = userMapper.mapResponseToken(credential);
        nuevoUser.setToken(generateToken(nuevoUser.getEmail()));
        return nuevoUser;
    }

    public UserResponse update(Long id, UserRequest userRequest) throws BadRequestException {
        var user = userCredentialRepository.findById(id);

        if (user.isEmpty()) {
            throw new BadRequestException("User not found");
        }

        if (ObjectUtils.isNotEmpty(userRequest.getUserType())) {
            var userType = userTypeRepository.findById(userRequest.getUserType().getId());
            if (userType.isEmpty()) {
                throw new BadRequestException("User type not found");
            }
        }

        var item = userMapper.mapUpdateRequest(user.get(), userRequest);
        if (userRequest.getPassword() != null) {
            String password1 = passwordEncoder.encode(item.getPassword());
            item.setPassword(password1);
        }

        userCredentialRepository.save(item);
        return userMapper.mapResponse(item);
    }

    public UserResponseById getById(Long id) throws BadRequestException {
        var user = userCredentialRepository.findById(id);
        if (user.isEmpty()) {
            throw new BadRequestException("User not found");
        }
        return userMapper.mapResponseById(user.get());
    }

    public void delete(Long id) throws BadRequestException {
        var user = userCredentialRepository.findById(id);

        if (user.isEmpty()) {
            throw new BadRequestException("User not found");
        }

        userCredentialRepository.deleteById(id);
    }


    public String generateToken(String username){
        return jwtService.generateToken(username);
    }

    public void validateToken(String token){
        jwtService.validateToken(token);
    }

}
