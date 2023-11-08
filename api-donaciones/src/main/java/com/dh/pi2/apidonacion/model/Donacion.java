package com.dh.pi2.apidonacion.model;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDate;

@Entity
@Table(name = "DONACIONES")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class Donacion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "Comentario")
    private String comentario;

    @Column(name = "Cantidad")
    @NotNull
    @NotBlank
    private double cantidad;

    @Column(name = "Fecha_Donacion")
    @NotNull
    @NotBlank
    private LocalDate fechaDonacion;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.MERGE)
    @JoinColumn(name = "METODO_PAGO_id", referencedColumnName = "id")
    private MetodoPago metodoPagoID;

    @Column(name = "USUARIOS_idUSUARIOS")
    private int idUsuarios;

    @Column(name = "PRODUCTOS_idPRODUCTOS")
    private int idProductos;

}
