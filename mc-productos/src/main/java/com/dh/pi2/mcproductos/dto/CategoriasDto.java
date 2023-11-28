package com.dh.pi2.mcproductos.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@JsonIgnoreProperties(ignoreUnknown = true)
public class CategoriasDto{
    private  int id;
    private  String nombre;
    private String descripcion;
}