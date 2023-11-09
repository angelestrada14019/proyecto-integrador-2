package com.dh.pi2.apidonacion.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "donaciones")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Donacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "comentario")
    private String comentario;

    @Column(name = "cantidad", nullable = false)
    private double cantidad;

    @Column(name = "fecha_donacion", nullable = false)
    private LocalDate fechaDonacion;

    @ManyToOne
    @JoinColumn(name = "metodo_pago_id", referencedColumnName = "id")
    private MetodoPago metodoPagoID;

    @Column(name = "usuarios_id")
    private int idUsuarios;

    @Column(name = "productos_id")
    private int idProductos;

}
