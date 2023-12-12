package com.dh.pi2.mcproductos.controller;

import com.dh.pi2.mcproductos.dto.DescripcionesDto;
import com.dh.pi2.mcproductos.service.CrudService;
import com.dh.pi2.mcproductos.service.DescripcionesServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api-productos/descripciones")
public class DescripcionesController extends BaseController<DescripcionesDto> {

    @Autowired
    private DescripcionesServiceImpl descripcionesService;
    public DescripcionesController(CrudService<DescripcionesDto> crudService) {
        super(crudService);
    }
}
