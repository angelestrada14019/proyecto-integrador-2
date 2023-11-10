package com.dh.pi2.usersapi.persistence.repository;

import com.dh.pi2.usersapi.persistence.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
