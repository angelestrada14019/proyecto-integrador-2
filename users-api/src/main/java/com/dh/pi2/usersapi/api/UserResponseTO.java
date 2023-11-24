package com.dh.pi2.usersapi.api;

import com.dh.pi2.usersapi.persistence.model.UserType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;

import java.time.ZonedDateTime;

@Data
@Builder
public class UserResponseTO {

    private Long id;
    private String name;
    private String lastname;
    private String email;

    @JsonIgnore
    private String password;

    private String profileUrl;
    private UserType userType;
}
