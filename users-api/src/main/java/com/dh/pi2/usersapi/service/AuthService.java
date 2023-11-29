package com.dh.pi2.usersapi.service;

import com.dh.pi2.usersapi.dto.UserRequest;
import com.dh.pi2.usersapi.dto.UserResponse;
import com.dh.pi2.usersapi.dto.UserResponseById;
import com.dh.pi2.usersapi.dto.UserResponseToken;
import com.dh.pi2.usersapi.entity.User;
import com.dh.pi2.usersapi.exceptions.BadRequestException;
import com.dh.pi2.usersapi.mapper.UserMapper;
import com.dh.pi2.usersapi.repository.UserCredentialRepository;
import com.dh.pi2.usersapi.repository.UserTypeRepository;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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

    public UserResponse update(Long id, UserRequest userRequest) {
        var user = userCredentialRepository.findById(id);

        if (user.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        if (ObjectUtils.isNotEmpty(userRequest.getUserType())) {
            var userType = userTypeRepository.findById(userRequest.getUserType().getId());
            if (userType.isEmpty()) {
                throw new RuntimeException("User type not found");
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

    public UserResponseById getById(Long id) {
        var user = userCredentialRepository.findById(id);

        if (user.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        return userMapper.mapResponseById(user.get());
    }

    public void delete(Long id) {
        var user = userCredentialRepository.findById(id);

        if (user.isEmpty()) {
            throw new RuntimeException("User not found");
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
