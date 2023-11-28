package com.dh.pi2.mcproductos.service;

import com.dh.pi2.mcproductos.dto.DescripcionesDto;
import com.dh.pi2.mcproductos.mapper.DescripcionesMapper;
import com.dh.pi2.mcproductos.persistence.entity.Descripciones;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.dh.pi2.mcproductos.persistence.repository.DescripcionesRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class DescripcionesServiceImpl implements CrudService<DescripcionesDto> {

    @Autowired
    private DescripcionesRepository descripcionesRepository;
    @Autowired
    DescripcionesMapper descripcionesMapper;
    @Override
    public DescripcionesDto crear(DescripcionesDto dto) {
        try {
            Descripciones descripciones = descripcionesMapper.fromDto(dto);
            descripciones = descripcionesRepository.save(descripciones);
            return descripcionesMapper.fromEntity(descripciones);
        }catch (Exception e) {
            log.error("error crear descripcion: " + e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public DescripcionesDto obtenerId(int id) {
        Descripciones descripciones = descripcionesRepository.findById(id).orElseThrow(()
                -> new RuntimeException("Multimedia no encontrada"));
        return descripcionesMapper.fromEntity(descripciones);
    }

    @Override
    public DescripcionesDto actualizar(DescripcionesDto dto) {
        try {
            if (!descripcionesRepository.existsById(dto.getId())) {
                throw new RuntimeException("Descripcion no encontrada");
            }
            Descripciones descripciones = descripcionesMapper.fromDto(dto);
            descripciones = descripcionesRepository.save(descripciones);
            return descripcionesMapper.fromEntity(descripciones);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public void eliminar(int id) {
        try {
            if (!descripcionesRepository.existsById(id)) {
                throw new RuntimeException("Descripcion no encontrada");
            }
            descripcionesRepository.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
