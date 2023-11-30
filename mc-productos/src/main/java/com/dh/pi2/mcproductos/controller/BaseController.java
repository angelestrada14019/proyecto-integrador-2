package com.dh.pi2.mcproductos.controller;

import com.dh.pi2.mcproductos.dto.CategoriasDto;
import com.dh.pi2.mcproductos.service.CategoriasServiceImpl;
import com.dh.pi2.mcproductos.service.CrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

public abstract class BaseController<D extends Object> {


    CrudService<D> crudService;

    public BaseController(CrudService<D> crudService) {
        this.crudService = crudService;
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/{id}")
    public ResponseEntity<D> obtenerId(@PathVariable int id) {
        D oDto = crudService.obtenerId(id);
        return ResponseEntity.ok(oDto);
    }

    @CrossOrigin(origins = "*")
    @PostMapping
    public ResponseEntity<D> crear(@RequestBody D dto) {
        D nDtl = crudService.crear(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(nDtl);
    }

    @CrossOrigin(origins = "*")
    @PutMapping("/{id}")
    public ResponseEntity<D> actualizar(@RequestBody D dto) {
        D aDto = crudService.actualizar(dto);
        return ResponseEntity.ok(aDto);
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarProducto(@PathVariable int id) {
        crudService.eliminar(id);
        return ResponseEntity.noContent().build();
    }

}
