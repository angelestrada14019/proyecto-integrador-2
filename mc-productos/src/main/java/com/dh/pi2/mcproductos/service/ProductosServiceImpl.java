package com.dh.pi2.mcproductos.service;

import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.dto.RequestProductosDto;
import com.dh.pi2.mcproductos.mapper.ProductosMapper;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import com.dh.pi2.mcproductos.persistence.repository.ProductosRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class ProductosServiceImpl implements ProductosService, CrudService<ProductosDto> {

    @Autowired
    private ProductosRepository productosRepository;

    @Autowired
    private ProductosMapper productosMapper;
    @Override
    public Page<ProductosDto> listPRoductsByFilterRequestProductosDto(RequestProductosDto filtro, Pageable pageable) {
        try {
            Page<Productos> productos = productosRepository.listPRoductsByFilterRequestProductosDto(filtro, pageable);
            return productosMapper.fromEntity(productos);
        }catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }
    }
    @Override
    public ProductosDto crear(ProductosDto productoDto) {
        try {
            Productos producto = productosMapper.fromDto(productoDto);
            producto = productosRepository.save(producto);
            return productosMapper.fromEntity(producto);
        }catch (Exception e) {
            log.error("error crear Product: " + e.getMessage());
            throw new RuntimeException(e.getMessage());
        }

    }
    @Override
    public ProductosDto obtenerId(int id) {
        Productos producto = productosRepository.findById(id).orElseThrow(()
                -> new RuntimeException("Producto no encontrado"));
        return productosMapper.fromEntity(producto);
    }
    @Override
    public ProductosDto actualizar(ProductosDto productoDto) {
        try {
            if (!productosRepository.existsById(productoDto.getId())) {
                throw new RuntimeException("Producto no encontrado");
            }
            // Si el producto existe, realizar la actualización
            Productos producto = productosMapper.fromDto(productoDto);
            producto = productosRepository.save(producto);
            return productosMapper.fromEntity(producto);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
    @Override
    public void eliminar(int id) {
        try {
            if (!productosRepository.existsById(id)) {
                throw new RuntimeException("Producto no encontrado");
            }
            productosRepository.deleteById(id);
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
