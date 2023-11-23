package com.dh.pi2.usersapi.repository;

import com.dh.pi2.usersapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCredentialRepository extends JpaRepository<User, Integer> {
}
