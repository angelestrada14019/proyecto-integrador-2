package com.dh.pi2.mcproductos.service;

import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.dto.RequestProductosDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductosService {
    Page<ProductosDto> listPRoductsByFilterRequestProductosDto(RequestProductosDto filtro,
                                                               Pageable pageable);

    ProductosDto crearProductWithMultiMediaAndDescription(ProductosDto dto);
}
