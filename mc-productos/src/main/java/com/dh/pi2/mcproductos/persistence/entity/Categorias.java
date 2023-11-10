package com.dh.pi2.mcproductos.persistence.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Builder
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "categorias")
public class Categorias {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Basic
    @Column(name = "Nombre")
    private String nombre;
    @Basic
    @Column(name = "Descripcion")
    private String descripcion;
}
