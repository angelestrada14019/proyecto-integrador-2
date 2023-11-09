package com.dh.pi2.mcproductos.mapper;

import com.dh.pi2.mcproductos.dto.CategoriasDto;
import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class CategoriasMapper extends AbstractConverter<Categorias, CategoriasDto> {

    ObjectMapper mapper =new ObjectMapper();
    @Override
    public CategoriasDto fromEntity(Categorias entity) {
        return mapper.convertValue(entity,CategoriasDto.class);
    }

    @Override
    public Categorias fromDto(CategoriasDto dto) {
        return mapper.convertValue(dto,Categorias.class);
    }
}
