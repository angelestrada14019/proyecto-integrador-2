package com.dh.pi2.apidonacion.controller;

import com.dh.pi2.apidonacion.dto.DonacionDTO;
import com.dh.pi2.apidonacion.exceptions.BadRequestException;
import com.dh.pi2.apidonacion.exceptions.ResourceNotFoundException;
import com.dh.pi2.apidonacion.service.DonacionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api-donaciones/donacion")
public class DonacionController {

    @Autowired
    DonacionService donacionService;

    @Autowired
    ObjectMapper mapper;

    // ADMIN
    @PostMapping
    public ResponseEntity<DonacionDTO> createDonacion(@RequestBody DonacionDTO donacionDTO) throws Exception {
        return ResponseEntity.ok(donacionService.createDonacion(donacionDTO));
    }

    // ALL
    @GetMapping("/{id}")
    public DonacionDTO readDonacion(@PathVariable int id) throws BadRequestException, ResourceNotFoundException {
        return donacionService.getDonacionByID(id);
    }


    // ADMIN
    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteDonacion(@PathVariable int id) throws BadRequestException, ResourceNotFoundException {
        donacionService.deleteDonacion(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }


    // ALL
    // lista de donacionos según usuario
    @GetMapping("/usuario/{id}")
    public ResponseEntity<List<DonacionDTO>> findDonacionsByCity(@PathVariable(name = "id") int id)  throws BadRequestException {
        List<DonacionDTO> donacionsDTO = donacionService.findDonacionesByUsuario(id);
        return ResponseEntity.ok(donacionsDTO);
    }

    // ALL
    // Lista de donacionos según producto
    @GetMapping("/producto/{id}")
    public ResponseEntity<List<DonacionDTO>> findDonacionsByCategory(@PathVariable(name = "id") int id)  throws BadRequestException {
        List<DonacionDTO> donacionsDTO = donacionService.findDonacionesByProducto(id);
        return ResponseEntity.ok(donacionsDTO);
    }



}
