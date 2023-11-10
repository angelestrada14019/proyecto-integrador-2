package com.dh.pi2.mcproductos.dto;

import lombok.*;

import java.io.Serializable;

/**
 * DTO for {@link com.dh.pi2.mcproductos.persistence.entity.Categorias}
 */
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Builder
@ToString
public class CategoriasDto{
    private  int id;
    private  String nombre;
    private String descripcion;
}