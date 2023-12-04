package com.dh.pi2.usersapi.controller;


import com.dh.pi2.usersapi.dto.UserRequest;
import com.dh.pi2.usersapi.dto.UserResponse;
import com.dh.pi2.usersapi.dto.UserResponseById;
import com.dh.pi2.usersapi.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {

//    @Autowired
//    private AuthService authService;
//
//    @GetMapping("/{id}")
//    public ResponseEntity<UserResponseById> get(@PathVariable("id") Long id) {
//        return ResponseEntity.ok(authService.getById(id));
//    }
//
//    @PatchMapping("/{id}")
//    public ResponseEntity<UserResponse> get(@PathVariable("id") Long id, @RequestBody UserRequest userRequest) {
//        return ResponseEntity.ok(authService.update(id, userRequest));
//    }
//
//    @DeleteMapping("/{id}")
//    public ResponseEntity<String> delete(@PathVariable("id") Long id) {
//        authService.delete(id);
//        return ResponseEntity.ok("usuario eliminado");
//    }
//
////    @GetMapping()
////    public ResponseEntity<UserSearchResponse> findAll() {
////        return ResponseEntity.ok(userService.findAll());
////    }
}
