package com.dh.pi2.mcproductos.mapper;

import com.dh.pi2.mcproductos.dto.MultimediasDto;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Component;

@Component
public class MultimediasMapper extends AbstractConverter<Multimedias, MultimediasDto> {

    ObjectMapper mapper =new ObjectMapper();
    @Override
    public MultimediasDto fromEntity(Multimedias entity) {
        return mapper.convertValue(entity, MultimediasDto.class);
    }

    @Override
    public Multimedias fromDto(MultimediasDto dto) {
        return mapper.convertValue(dto, Multimedias.class);
    }
}
