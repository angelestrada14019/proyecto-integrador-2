package com.dh.pi2.apidonacion.service;

import com.dh.pi2.apidonacion.dto.MetodoPagoDTO;
import com.dh.pi2.apidonacion.model.MetodoPago;
import com.dh.pi2.apidonacion.repository.IMetodoPagoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MetodoPagoService {

    @Autowired
    private IMetodoPagoRepository metodoPagoRepository;

    @Autowired
    ObjectMapper mapper;
    public MetodoPago findMPById(int id) {
        MetodoPago metodoPago = metodoPagoRepository.findById(id).orElse(null);
        return metodoPago;
    }
}
