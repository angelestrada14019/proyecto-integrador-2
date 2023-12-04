package com.dh.pi2.usersapi.controller;

import com.dh.pi2.usersapi.dto.*;
import com.dh.pi2.usersapi.entity.User;
import com.dh.pi2.usersapi.exceptions.BadRequestException;
import com.dh.pi2.usersapi.repository.UserCredentialRepository;
import com.dh.pi2.usersapi.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserCredentialRepository userCredentialRepository;

    @PostMapping("/register")
    public UserResponseToken addNewUser(@RequestBody User userCredential) throws BadRequestException {
        return authService.saveUser(userCredential);
    }

    @PostMapping("/token")
    public UserResponseToken getToken(@RequestBody AuthRequest authRequest) throws BadRequestException {
//        Authentication authenticate = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
//        if (authenticate.isAuthenticated()){
//            return authService.generateToken(authRequest.getUsername());
//        }else {
//            throw new BadRequestException("email or password incorrect");
//        }
        return authService.login(authRequest);


    }

    @GetMapping("/validate")
    public String validateToken(@RequestParam("token") String token){
        authService.validateToken(token);
        return "Token is valid";
    }

    @GetMapping("/getUser/{id}")
    public ResponseEntity<UserResponseById> get(@PathVariable("id") Long id) throws BadRequestException {
        return ResponseEntity.ok(authService.getById(id));
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<UserResponse> get(@PathVariable("id") Long id, @RequestBody UserRequest userRequest) throws BadRequestException {
        return ResponseEntity.ok(authService.update(id, userRequest));
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<String> delete(@PathVariable("id") Long id) throws BadRequestException {
        authService.delete(id);
        return ResponseEntity.ok("usuario eliminado");
    }



}
