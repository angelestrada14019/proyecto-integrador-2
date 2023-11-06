package com.dh.pi2.apidonacion.service;

import com.dh.pi2.apidonacion.dto.MetodoPagoDTO;
import com.dh.pi2.apidonacion.exceptions.BadRequestException;
import com.dh.pi2.apidonacion.exceptions.ResourceNotFoundException;
import com.dh.pi2.apidonacion.model.MetodoPago;
import com.dh.pi2.apidonacion.repository.IMetodoPagoRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class MetodoPagoService {

    @Autowired
    private IMetodoPagoRepository metodoPagoRepository;

    @Autowired
    ObjectMapper mapper;
    public MetodoPagoDTO findMPById(int id) {
        MetodoPago metodoPago = metodoPagoRepository.findById(id).orElse(null);
        return mapper.convertValue(metodoPago, MetodoPagoDTO.class);
    }

    public MetodoPagoDTO crearMetodoPago(MetodoPagoDTO metodoPagoDTO) throws BadRequestException {
        if(metodoPagoDTO.getName().isEmpty() || metodoPagoDTO == null)
            throw new BadRequestException("El metodo de pago no puede ser null");
        MetodoPago metodoPago = mapper.convertValue(metodoPagoDTO, MetodoPago.class);
        if (this.findMPById(metodoPago.getId()) != null)
            throw new BadRequestException("Este metodo de pago ya existe");

        return mapper.convertValue(metodoPagoRepository.save(metodoPago), MetodoPagoDTO.class);
    }

    public void deleteMetodoPago(int id) throws BadRequestException, ResourceNotFoundException {
        if( id < 1 )
            throw new BadRequestException("El id de la ciudad no puede ser negativo");
        if (metodoPagoRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe la ciudad con id: " + id);
        metodoPagoRepository.deleteById(id);
    }

    public Set<MetodoPagoDTO> getListMetodoPago() {
        List<MetodoPago> metodoPagos = metodoPagoRepository.findAll();
        Set<MetodoPagoDTO> metodoPagosDTO = new HashSet<>();
        for (MetodoPago metodoPago: metodoPagos) {
            metodoPagosDTO.add(mapper.convertValue(metodoPago, MetodoPagoDTO.class));
        }

        return metodoPagosDTO;
    }

}
