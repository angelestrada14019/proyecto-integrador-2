package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class RequestProductosDto {

    private String nombre;
    private LocalDateTime fechaPublicacion;
    private LocalDateTime fechaFinalizacion;
    private Double monto;
    private Categorias categoriasId;
    private int usuariosId;
}
