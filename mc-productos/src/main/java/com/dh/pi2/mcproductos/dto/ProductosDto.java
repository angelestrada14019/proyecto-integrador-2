package com.dh.pi2.mcproductos.dto;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import jakarta.ws.rs.DefaultValue;
import lombok.*;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@ToString
@Builder
public class ProductosDto {

    private int id;
    private String nombre;
    private String resumen;
    private String descripcion;
    private String fechaPublicacion;
    private String fechaFinalizacion;
    private double monto;
    @DefaultValue(value = "0")
    private double montoSumatoriaDonaciones;
    private int usuariosId;
    private Categorias categoriasId;
    private List<Multimedias> multimedias;
}
