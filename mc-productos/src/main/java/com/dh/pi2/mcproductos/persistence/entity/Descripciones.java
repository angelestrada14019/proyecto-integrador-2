package com.dh.pi2.mcproductos.persistence.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "descripciones")
public class Descripciones {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "descripcion")
    private String descripcion;
    @Column(name = "tipo")
    private Integer tipo;
    @ManyToOne
    @JoinColumn(name = "productos_id", referencedColumnName = "id")
    private Productos productosId;

}
