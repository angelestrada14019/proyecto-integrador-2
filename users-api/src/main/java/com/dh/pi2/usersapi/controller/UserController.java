package com.dh.pi2.usersapi.controller;


import com.dh.pi2.usersapi.api.UserRequestTO;
import com.dh.pi2.usersapi.api.UserResponseTO;
import com.dh.pi2.usersapi.api.UserSearchResponseTo;
import com.dh.pi2.usersapi.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {

//    private final UserService userService;
//
//    public UserController(UserService userService) {
//        this.userService = userService;
//    }
//
//    @PostMapping
//    public ResponseEntity<UserResponseTO> create(@RequestBody UserRequestTO userRequestTO) {
//        return ResponseEntity.ok(userService.create(userRequestTO));
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<UserResponseTO> get(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(userService.getById(id));
//    }
//
//    @PatchMapping("/{id}")
//    public ResponseEntity<UserResponseTO> get(@PathVariable("id") Long id, @RequestBody UserRequestTO userRequestTO) {
//        return ResponseEntity.ok(userService.update(id, userRequestTO));
//    }
//
//    @GetMapping()
//    public ResponseEntity<UserSearchResponseTo> findAll() {
//        return ResponseEntity.ok(userService.findAll());
//    }
}
