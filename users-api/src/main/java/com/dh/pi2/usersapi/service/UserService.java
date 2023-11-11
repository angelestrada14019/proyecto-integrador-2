package com.dh.pi2.usersapi.service;

import com.dh.pi2.usersapi.api.UserRequestTO;
import com.dh.pi2.usersapi.api.UserResponseTO;
import com.dh.pi2.usersapi.api.UserSearchResponseTo;
import com.dh.pi2.usersapi.mapper.UserMapper;
import com.dh.pi2.usersapi.persistence.repository.UserRepository;
import com.dh.pi2.usersapi.persistence.repository.UserTypeRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class UserService {

    private final UserRepository userRepository;
    private final UserTypeRepository userTypeRepository;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper, UserTypeRepository userTypeRepository) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.userTypeRepository = userTypeRepository;
    }

    public UserResponseTO create(UserRequestTO userRequestTO) {
        var user = userMapper.mapCreateRequest(userRequestTO);

        var userType = userTypeRepository.findById(userRequestTO.getUserType().getId());
        if (userType.isEmpty()) {
            log.error("User type {} not found", userRequestTO.getUserType());
            throw new RuntimeException("User type not found");
        }

        var item = userRepository.save(user);

        return userMapper.mapResponse(item);
    }

    public UserResponseTO getById(Long id) {
        var user = userRepository.findById(id);

        if (user.isEmpty()) {
            log.error("User {} not found", id);
            throw new RuntimeException("User not found");
        }

        return userMapper.mapResponse(user.get());
    }

    public UserResponseTO update(Long id, UserRequestTO userRequestTO) {
        var user = userRepository.findById(id);

        if (user.isEmpty()) {
            log.error("User {} not found", id);
            throw new RuntimeException("User not found");
        }

        if (ObjectUtils.isNotEmpty(userRequestTO.getUserType())) {
            var userType = userTypeRepository.findById(userRequestTO.getUserType().getId());
            if (userType.isEmpty()) {
                log.error("User type {} not found", userRequestTO.getUserType());
                throw new RuntimeException("User type not found");
            }
        }

        var item = userMapper.mapUpdateRequest(user.get(), userRequestTO);
        return userMapper.mapResponse(item);
    }

    public UserSearchResponseTo findAll() {
        var users = userRepository.findAll();

        var items = users.stream().map(userMapper::mapResponse).toList();
        return UserSearchResponseTo.builder()
                .total(items.size())
                .users(items)
                .build();
    }
}
