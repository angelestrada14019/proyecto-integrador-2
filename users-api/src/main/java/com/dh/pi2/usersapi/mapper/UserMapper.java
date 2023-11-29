package com.dh.pi2.usersapi.mapper;

import com.dh.pi2.usersapi.dto.UserRequest;
import com.dh.pi2.usersapi.dto.UserResponse;
import com.dh.pi2.usersapi.dto.UserResponseById;
import com.dh.pi2.usersapi.dto.UserResponseToken;
import com.dh.pi2.usersapi.entity.User;
import com.dh.pi2.usersapi.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {


    public User mapCreateRequest(UserRequest userRequest) {
        var user = new User();
        user.setName(userRequest.getName());
        user.setLastname(userRequest.getLastname());
        user.setPassword(userRequest.getPassword());
        user.setProfileUrl(userRequest.getProfileUrl());
        user.setEmail(userRequest.getEmail());
        user.setUserType(userRequest.getUserType());

        return user;
    }

    public User mapUpdateRequest(User user, UserRequest userRequest) {
        user.setName(userRequest.getName());
        user.setLastname(userRequest.getLastname());
        user.setProfileUrl(userRequest.getProfileUrl());
        user.setEmail(userRequest.getEmail());
        user.setPassword(userRequest.getPassword());
        user.setUserType(userRequest.getUserType());

        return user;
    }

    public UserResponse mapResponse(User user) {
        return UserResponse.builder()
                .name(user.getName())
                .lastname(user.getLastname())
                .id(user.getId())
                .email(user.getEmail())
                .profileUrl(user.getProfileUrl())
                .userType(user.getUserType())
                .build();
    }

    public UserResponseToken mapResponseToken(User user) {
        return UserResponseToken.builder()
                .name(user.getName())
                .lastname(user.getLastname())
                .id(user.getId())
                .email(user.getEmail())
                .profileUrl(user.getProfileUrl())
                .userType(user.getUserType())
                .build();
    }

    public UserResponseById mapResponseById(User user) {
        return UserResponseById.builder()
                .name(user.getName())
                .lastname(user.getLastname())
                .id(user.getId())
                .build();
    }
}
