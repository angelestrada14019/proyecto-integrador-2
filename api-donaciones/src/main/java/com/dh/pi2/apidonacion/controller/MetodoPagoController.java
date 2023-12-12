package com.dh.pi2.apidonacion.controller;

import com.dh.pi2.apidonacion.dto.MetodoPagoDTO;
import com.dh.pi2.apidonacion.exceptions.BadRequestException;
import com.dh.pi2.apidonacion.exceptions.ResourceNotFoundException;
import com.dh.pi2.apidonacion.service.MetodoPagoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Set;


@RestController
@RequestMapping("/api-donaciones/metodoPago")
public class MetodoPagoController {

    @Autowired
    MetodoPagoService metodoPagoService;

    // ADMIN
    @PostMapping()
    public ResponseEntity<MetodoPagoDTO> createMetodoPago(@RequestBody MetodoPagoDTO metodoPagoDTO) throws BadRequestException {
        return ResponseEntity.ok(metodoPagoService.crearMetodoPago(metodoPagoDTO));
    }

    // ALL
    @GetMapping("/{id}")
    public MetodoPagoDTO readMetodoPago(@PathVariable int id) throws BadRequestException{
        return metodoPagoService.findMPById(id);
    }


    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteMetodoPago(@PathVariable int id) throws BadRequestException, ResourceNotFoundException{
        metodoPagoService.deleteMetodoPago(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    // ALL
    @GetMapping
    public Set<MetodoPagoDTO> getListCategories() {
        return metodoPagoService.getListMetodoPago();
    }


}
