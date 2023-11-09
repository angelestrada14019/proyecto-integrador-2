package com.dh.pi2.mcproductos.service;

import com.dh.pi2.mcproductos.dto.CategoriasDto;
import com.dh.pi2.mcproductos.mapper.CategoriasMapper;
import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import com.dh.pi2.mcproductos.persistence.repository.CategoriasRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class CategoriasServiceImpl implements CrudService<CategoriasDto> {

    @Autowired
    CategoriasMapper categoriasMapper;
    @Autowired
    CategoriasRepository categoriasRepository;
    @Override
    public CategoriasDto crear(CategoriasDto categoriasDto) {
        try {
            Categorias categorias = categoriasMapper.fromDto(categoriasDto);
            categorias = categoriasRepository.save(categorias);
            return categoriasMapper.fromEntity(categorias);
        }catch (Exception e) {
            log.error("error crear Product: " + e.getMessage());
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public CategoriasDto obtenerId(int id) {
        Categorias categorias = categoriasRepository.findById(id).orElseThrow(()
                -> new RuntimeException("Producto no encontrado"));
        return categoriasMapper.fromEntity(categorias);
    }

    @Override
    public CategoriasDto actualizar(CategoriasDto categoriasDto) {
        try {
            if (!categoriasRepository.existsById(categoriasDto.getId())) {
                throw new RuntimeException("Categoria no encontrada");
            }
            Categorias categorias = categoriasMapper.fromDto(categoriasDto);
            categorias = categoriasRepository.save(categorias);
            return categoriasMapper.fromEntity(categorias);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }

    @Override
    public void eliminar(int id) {
        try {
            if (!categoriasRepository.existsById(id)) {
                throw new RuntimeException("Categoria no encontrada");
            }
            categoriasRepository.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
