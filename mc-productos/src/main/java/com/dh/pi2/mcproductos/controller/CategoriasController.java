package com.dh.pi2.mcproductos.controller;

import com.dh.pi2.mcproductos.dto.CategoriasDto;
import com.dh.pi2.mcproductos.service.CategoriasServiceImpl;
import com.dh.pi2.mcproductos.service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api-productos/categorias")
public class CategoriasController extends BaseController<CategoriasDto>{

    @Autowired
    CategoriasServiceImpl categoriasService;

    public CategoriasController(CrudService<CategoriasDto> crudService) {
        super(crudService);
    }
}
