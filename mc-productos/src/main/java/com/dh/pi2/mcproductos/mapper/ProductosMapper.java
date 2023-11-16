package com.dh.pi2.mcproductos.mapper;

import com.dh.pi2.mcproductos.dto.MultimediasDto;
import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.dto.ProductosWithoutMAndDDto;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Component
public class ProductosMapper extends AbstractConverter<Productos, ProductosDto> {

    DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
    @Override
    public ProductosDto fromEntity(Productos entity) {

        return ProductosDto.builder()
                .id(entity.getId())
                .nombre(entity.getNombre())
                .fechaPublicacion(entity.getFechaPublicacion().format(formatter))
                .fechaFinalizacion(entity.getFechaFinalizacion().format(formatter))
                .usuariosId(entity.getUsuariosId())
                .montoSumatoriaDonaciones(entity.getMontoSumatoriaDonaciones())
                .monto(entity.getMonto())
                .categoriasId(entity.getCategoriasId())
                .multimedias(entity.getMultimediasList())
                .descripciones(entity.getDescripciones())
                .build();
    }

    @Override
    public Productos fromDto(ProductosDto dto) {
        return Productos.builder()
                .id(dto.getId())
                .nombre(dto.getNombre())
                .fechaPublicacion(LocalDateTime.parse(dto.getFechaPublicacion(),formatter))
                .fechaFinalizacion(LocalDateTime.parse(dto.getFechaFinalizacion(),formatter))
                .montoSumatoriaDonaciones(dto.getMontoSumatoriaDonaciones())
                .usuariosId(dto.getUsuariosId())
                .monto(dto.getMonto())
                .multimediasList(dto.getMultimedias())
                .descripciones(dto.getDescripciones())
                .categoriasId(dto.getCategoriasId())
                .build();
    }




    public ProductosWithoutMAndDDto fromDtoJustProduct(ProductosDto dto) {
        return ProductosWithoutMAndDDto.builder()
                .id(dto.getId())
                .nombre(dto.getNombre())
                .fechaPublicacion(LocalDateTime.parse(dto.getFechaPublicacion(),formatter))
                .fechaFinalizacion(LocalDateTime.parse(dto.getFechaFinalizacion(),formatter))
                .usuariosId(dto.getUsuariosId())
                .monto(dto.getMonto())
                .categoriasId(dto.getCategoriasId())
                .build();
    }
}
