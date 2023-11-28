package com.dh.pi2.mcproductos.dto;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;


/**
 * DTO for {@link com.dh.pi2.mcproductos.persistence.entity.Descripciones}
 */
@AllArgsConstructor
@Getter
@ToString
@Setter
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class DescripcionesDto {
    private  int id;
    private  String descripcion;
    private  Integer tipo;
    @JsonIgnore
    private Productos productosId;
}