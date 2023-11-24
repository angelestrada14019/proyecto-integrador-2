package com.dh.pi2.mcproductos.controller;

import com.dh.pi2.mcproductos.dto.MultimediasDto;
import com.dh.pi2.mcproductos.service.CrudService;
import com.dh.pi2.mcproductos.service.MultimediasServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api-productos/multimedias")
public class MultimediasController extends BaseController<MultimediasDto> {

    @Autowired
    MultimediasServiceImpl multimediasService;

    public MultimediasController(CrudService<MultimediasDto> crudService) {
        super(crudService);
    }
}
