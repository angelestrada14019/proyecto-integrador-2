package com.dh.pi2.usersapi.api;

import com.dh.pi2.usersapi.persistence.model.UserType;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserRequestTO {

    private String name;
    private String lastname;
    private String email;
    private String password;
    private String profileUrl;
    private UserType userType;
}
