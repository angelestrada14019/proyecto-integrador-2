package com.dh.pi2.usersapi.controller;

import com.dh.pi2.usersapi.dto.AuthRequest;
import com.dh.pi2.usersapi.entity.User;
import com.dh.pi2.usersapi.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String addNewUser(@RequestBody User userCredential){
        return authService.saveUser(userCredential);
    }

    @PostMapping("/token")
    public String getToken(@RequestBody AuthRequest authRequest){
        return authService.generateToken(authRequest.getEmail());
    }

    @GetMapping("/validateToken")
    public String validateToken(@RequestParam("token") String token){
        authService.validateToken(token);
        return "Token is valid";
    }



}
