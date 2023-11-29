package com.dh.pi2.usersapi.dto;

import com.dh.pi2.usersapi.entity.UserType;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserResponseById {

    private Long id;
    private String name;
    private String lastname;
}
