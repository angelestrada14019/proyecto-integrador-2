package com.dh.pi2.usersapi.mapper;

import com.dh.pi2.usersapi.api.UserRequestTO;
import com.dh.pi2.usersapi.api.UserResponseTO;
import com.dh.pi2.usersapi.persistence.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public User mapCreateRequest(UserRequestTO userRequestTO) {
        var user = new User();
        user.setName(userRequestTO.getName());
        user.setLastname(userRequestTO.getLastname());
        user.setPassword(userRequestTO.getPassword());
        user.setProfileUrl(userRequestTO.getProfileUrl());

        return user;
    }

    public UserResponseTO mapResponse(User user) {
        return UserResponseTO.builder()
                .name(user.getName())
                .lastname(user.getLastname())
                .id(user.getId())
                .email(user.getEmail())
                .profileUrl(user.getProfileUrl())
                .creationDate(user.getCreationDate())
                .lastUpdated(user.getLastUpdated())
                .userType(user.getUserType())
                .build();
    }
}
