package com.dh.pi2.mcproductos.service;

import com.dh.pi2.mcproductos.dto.DescripcionesDto;
import com.dh.pi2.mcproductos.dto.MultimediasDto;
import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.dto.RequestProductosDto;
import com.dh.pi2.mcproductos.mapper.ProductosMapper;
import com.dh.pi2.mcproductos.persistence.entity.Descripciones;
import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import com.dh.pi2.mcproductos.persistence.repository.DescripcionesRepository;
import com.dh.pi2.mcproductos.persistence.repository.MultimediasRepository;
import com.dh.pi2.mcproductos.persistence.repository.ProductosRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ProductosServiceImpl implements ProductosService, CrudService<ProductosDto> {

    @Autowired
    private ProductosRepository productosRepository;

    @Autowired
    private DescripcionesRepository descripcionesRepository;

    @Autowired
    MultimediasRepository multimediasRepository;

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


    @Override
    @Transactional
    public ProductosDto crearProductWithMultiMediaAndDescription(ProductosDto dto) {
        try {
            //crear producto
            Productos producto = productosMapper.fromDto(dto);
            producto = productosRepository.save(producto);
            //crear multimedia
            List<Multimedias> multimedias = new ArrayList<>();
            for (Multimedias multimedia : dto.getMultimedias()) {
                Multimedias multi = Multimedias.builder()
                        .url(multimedia.getUrl())
                        .tipo(multimedia.getTipo())
                        .productosId(producto)
                        .build();
                Multimedias multimedia2 = multimediasRepository.save(multi);
                multimedias.add(multimedia2);
            }
            //crear descripcion
            List<Descripciones> descripciones = new ArrayList<>();
            for (Descripciones descripcione : dto.getDescripciones()) {
                Descripciones descrip = Descripciones.builder()
                        .descripcion(descripcione.getDescripcion())
                        .tipo(descripcione.getTipo())
                        .productosId(producto)
                        .build();
                Descripciones descripcione2 = descripcionesRepository.save(descrip);
                descripciones.add(descripcione2);
            }
            dto.setId(producto.getId());
            dto.setDescripciones(descripciones);
            dto.setMultimedias(multimedias);
            return dto;
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }
}
