package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.persistence.entity.Descripciones;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.ws.rs.DefaultValue;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductosDto {

    private int id;
    private String nombre;
    private String fechaPublicacion;
    private String fechaFinalizacion;
    private double monto;
    @DefaultValue(value = "0")
    private double montoSumatoriaDonaciones;
    private int usuariosId;
    private Categorias categoriasId;
    @JsonIgnoreProperties(value = {"productosId"})
    private List<Multimedias> multimedias;
    @JsonIgnoreProperties(value = {"productosId"})
    private List<Descripciones> descripciones;
}
