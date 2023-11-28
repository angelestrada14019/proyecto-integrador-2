package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * DTO for {@link com.dh.pi2.mcproductos.persistence.entity.Productos}
 */
@AllArgsConstructor
@Getter
@ToString
@Builder
public class ProductosWithoutMAndDDto {
    private int id;
    private String nombre;
    private LocalDateTime fechaPublicacion;
    private LocalDateTime fechaFinalizacion;
    private double monto;
    private int usuariosId;
    private Categorias categoriasId;
}