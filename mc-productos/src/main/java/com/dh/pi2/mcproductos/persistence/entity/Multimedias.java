package com.dh.pi2.mcproductos.persistence.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "multimedias")
public class Multimedias {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "Url")
    private String url;

    @Column(name = "tipo")
    private int tipo;

    @ManyToOne
    @JoinColumn(name = "PRODUCTOS_id", referencedColumnName = "id")
    private Productos productosId;

}
