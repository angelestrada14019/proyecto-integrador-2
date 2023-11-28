package com.dh.pi2.apidonacion.controller;

import com.dh.pi2.apidonacion.dto.DonacionDTO;
import com.dh.pi2.apidonacion.exceptions.BadRequestException;
import com.dh.pi2.apidonacion.exceptions.ResourceNotFoundException;
import com.dh.pi2.apidonacion.message.CustomMessageMonto;
import com.dh.pi2.apidonacion.service.DonacionService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@CrossOrigin(origins = "*")
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
        DonacionDTO dto = donacionService.createDonacion(donacionDTO);
        CustomMessageMonto customMessageMonto = donacionService.countCantidadWithUserAndProduct( donacionDTO.getIdProductos());
        return ResponseEntity.ok(dto);
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
//    @GetMapping("/producto_usuario")
//    public ResponseEntity<CustomMessageMonto> countCantidadWithUserAndProduct(
//            @RequestParam(name = "usuario_id") int usuarioId,
//            @RequestParam(name = "producto_id") int productoId)  throws BadRequestException {
//        CustomMessageMonto customMessageMonto = donacionService.countCantidadWithUserAndProduct(usuarioId,productoId);
//        return ResponseEntity.ok(customMessageMonto);
//    }

}
