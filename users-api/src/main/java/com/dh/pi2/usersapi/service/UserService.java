package com.dh.pi2.usersapi.service;

import com.dh.pi2.usersapi.api.UserRequestTO;
import com.dh.pi2.usersapi.api.UserResponseTO;
import com.dh.pi2.usersapi.mapper.UserMapper;
import com.dh.pi2.usersapi.persistence.repository.UserRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public UserResponseTO create(UserRequestTO userRequestTO) {
        var user = userMapper.mapCreateRequest(userRequestTO);
        var item = userRepository.save(user);

        return userMapper.mapResponse(item);
    }
}
