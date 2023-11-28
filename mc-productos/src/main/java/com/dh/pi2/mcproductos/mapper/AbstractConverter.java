package com.dh.pi2.mcproductos.mapper;



import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.stream.Collectors;

public abstract class AbstractConverter<E,D> {



    public abstract D fromEntity(E entity);
    public abstract E fromDto(D dto);

    public List<D> fromEntity(List<E> entitys){

        return entitys.stream().map(e -> fromEntity(e)).collect(Collectors.toList());
    }
    public Page<D> fromEntity(Page<E> entitys){
        return  entitys.map(this::fromEntity);
    }
    public List<E> fromDto(List<D> dto){
        return dto.stream().map(e -> fromDto(e)).collect(Collectors.toList());
    }

}
