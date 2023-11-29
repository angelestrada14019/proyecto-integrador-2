package com.dh.pi2.usersapi.dto;

import com.dh.pi2.usersapi.dto.UserResponse;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class UserSearchResponseTo {

    private Integer total;
    private List<UserResponse> users;
}
