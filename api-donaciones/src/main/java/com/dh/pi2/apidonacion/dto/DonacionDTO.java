package com.dh.pi2.apidonacion.dto;

import com.dh.pi2.apidonacion.model.MetodoPago;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class DonacionDTO {
    private int id;
    private String comentario;
    private double cantidad;
    private LocalDate fechaDonacion;
    private MetodoPago metodoPagoID;
    private int idUsuarios;
    private int idProductos;
}
