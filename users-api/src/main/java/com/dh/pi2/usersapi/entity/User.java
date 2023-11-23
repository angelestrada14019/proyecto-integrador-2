package com.dh.pi2.usersapi.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity(name = "usuarios")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private String email;
    private String password;
    private String profileUrl;

    @ManyToOne
    @JoinColumn(name = "user_type_id", referencedColumnName = "id")
    private UserType userType;


}
