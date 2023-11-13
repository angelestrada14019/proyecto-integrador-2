package com.dh.pi2.mcproductos.mapper;

import com.dh.pi2.mcproductos.dto.DescripcionesDto;
import com.dh.pi2.mcproductos.persistence.entity.Descripciones;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class DescripcionesMapper extends AbstractConverter<Descripciones, DescripcionesDto> {

    ObjectMapper mapper =new ObjectMapper();

    @Override
    public DescripcionesDto fromEntity(Descripciones entity) {
        return mapper.convertValue(entity, DescripcionesDto.class);
    }

    @Override
    public Descripciones fromDto(DescripcionesDto dto) {
        return mapper.convertValue(dto, Descripciones.class);
    }
}
