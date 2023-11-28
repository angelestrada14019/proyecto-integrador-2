package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.persistence.entity.Descripciones;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class ProductosResumenDto {

    private int id;
    private String nombre;
    private String fechaPublicacion;
    private double monto;
    private double montoTotalDonaciones;
    private List<Multimedias> multimedias;
    private List<Descripciones> descripciones;
}
