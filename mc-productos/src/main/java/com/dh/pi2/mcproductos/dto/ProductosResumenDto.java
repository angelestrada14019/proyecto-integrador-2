package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class ProductosResumenDto {

    private int id;
    private String nombre;
    private String resumen;
    private String fechaPublicacion;
    private double monto;
    private double montoTotalDonaciones;
    private Multimedias multimedias; // debe ser de tipo 1 para portada
}
