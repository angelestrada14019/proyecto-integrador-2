package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.io.Serializable;

/**
 * DTO for {@link Multimedias}
 */
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@Builder
public class MultimediasDto {
    private int id;
    private String url;
    private int tipo;
    @JsonIgnore
    private Productos productosId;
}