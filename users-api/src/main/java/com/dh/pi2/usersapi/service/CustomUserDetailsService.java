package com.dh.pi2.usersapi.service;

import com.dh.pi2.usersapi.config.CustomUserDetails;
import com.dh.pi2.usersapi.entity.User;
import com.dh.pi2.usersapi.repository.UserCredentialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Optional;

public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserCredentialRepository userCredentialRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<User>user = userCredentialRepository.findByName(username);
        return user.map(CustomUserDetails::new).orElseThrow(()-> new UsernameNotFoundException("user not found with name: " + username));
    }
}
