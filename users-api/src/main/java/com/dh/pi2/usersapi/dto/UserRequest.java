package com.dh.pi2.usersapi.dto;

import com.dh.pi2.usersapi.entity.UserType;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequest {

    private String name;
    private String lastname;
    private String email;
    private String password;
    private String profileUrl;
    private UserType userType;
}
