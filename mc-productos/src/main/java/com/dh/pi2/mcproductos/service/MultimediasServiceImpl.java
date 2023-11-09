package com.dh.pi2.mcproductos.service;

import com.dh.pi2.mcproductos.dto.MultimediasDto;
import com.dh.pi2.mcproductos.mapper.MultimediasMapper;
import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.dh.pi2.mcproductos.persistence.repository.MultimediasRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class MultimediasServiceImpl implements CrudService<MultimediasDto> {

    @Autowired
    MultimediasMapper multimediasMapper;
    @Autowired
    MultimediasRepository multimediasRepository;
    @Override
    public MultimediasDto crear(MultimediasDto multimediasDto) {
        try {
            Multimedias multimedias = multimediasMapper.fromDto(multimediasDto);
            multimedias = multimediasRepository.save(multimedias);
            return multimediasMapper.fromEntity(multimedias);
        }catch (Exception e) {
            log.error("error crear Product: " + e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public MultimediasDto obtenerId(int id) {
        Multimedias multimedias = multimediasRepository.findById(id).orElseThrow(()
                -> new RuntimeException("Multimedia no encontrada"));
        return multimediasMapper.fromEntity(multimedias);
    }

    @Override
    public MultimediasDto actualizar(MultimediasDto multimediasDto) {
        try {
            if (!multimediasRepository.existsById(multimediasDto.getId())) {
                throw new RuntimeException("Multimedia no encontrada");
            }
            Multimedias multimedias = multimediasMapper.fromDto(multimediasDto);
            multimedias = multimediasRepository.save(multimedias);
            return multimediasMapper.fromEntity(multimedias);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public void eliminar(int id) {
        try {
            if (!multimediasRepository.existsById(id)) {
                throw new RuntimeException("Categoria no encontrada");
            }
            multimediasRepository.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
