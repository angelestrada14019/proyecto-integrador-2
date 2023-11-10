package com.dh.pi2.usersapi.api;

import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserSearchResponseTo {

    private Integer total;
    private List<UserResponseTO> users;
}
