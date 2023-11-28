package com.dh.pi2.apidonacion.service;
import com.dh.pi2.apidonacion.dto.DonacionDTO;
import com.dh.pi2.apidonacion.exceptions.ResourceNotFoundException;
import com.dh.pi2.apidonacion.message.CustomMessageMonto;
import com.dh.pi2.apidonacion.message.queue.DonacionesSend;
import com.dh.pi2.apidonacion.model.Donacion;
import com.dh.pi2.apidonacion.model.MetodoPago;
import com.dh.pi2.apidonacion.repository.IDonacionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ws.rs.BadRequestException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
public class DonacionService {

    @Autowired
    private IDonacionRepository donacionRepository;

    @Autowired
    private MetodoPagoService metodoPagoService;

    @Autowired
    private DonacionesSend donacionesSend;

    @Autowired
    ObjectMapper mapper;
    // Método para crear una donación
    public DonacionDTO createDonacion (DonacionDTO donacionDTO) throws BadRequestException {

        if(donacionDTO.getCantidad() == 0 || donacionDTO == null)
            throw new BadRequestException("El donacion no puede ser 0 o null");
        int metodoPagoId = donacionDTO.getMetodoPagoID().getId();
        Donacion donacion = mapper.convertValue(donacionDTO, Donacion.class);

        donacionDTO = mapper.convertValue(donacionRepository.save(donacion), DonacionDTO.class);
        donacionDTO.setMetodoPagoID(mapper.convertValue(metodoPagoService.findMPById(metodoPagoId), MetodoPago.class));

        return donacionDTO;
    }

    // Método para obtener una donación por su ID
    public DonacionDTO getDonacionByID(int id) throws BadRequestException, ResourceNotFoundException {
        if( id < 1 )
            throw new BadRequestException("El id de la donacion no puede ser negativo");
        if (donacionRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe existe la donacion con id: " + id);
        Optional<Donacion> donacion = donacionRepository.findById(id);
        return mapper.convertValue(donacion, DonacionDTO.class);
    }

    // Método para eliminar una donación por su ID
    public void deleteDonacion(int id) throws BadRequestException, ResourceNotFoundException {
        if( id < 1 )
            throw new BadRequestException("El id del producto no puede ser negativo");
        if (donacionRepository.findById(id).isEmpty())
            throw new ResourceNotFoundException("No existe existe la donacion con id: " + id);
        donacionRepository.deleteById(id);
    }

    // Lista de Donaciones según un Usuario
    public List<DonacionDTO> findDonacionesByUsuario(int id)  throws BadRequestException {
        if (id < 1)
            throw new BadRequestException("El id de la ciudad no puede ser negativo");

        List<Donacion> donaciones = donacionRepository.findDonacionesByUsuario(id);
        List<DonacionDTO> donacionDTOS = new ArrayList<>();
        for (Donacion donacion: donaciones) {
            donacionDTOS.add(mapper.convertValue(donacion, DonacionDTO.class));
        }

        return donacionDTOS;
    }

    // Lista de Donaciones según un Producto
    public List<DonacionDTO> findDonacionesByProducto(int id)  throws BadRequestException {
        if (id < 1)
            throw new BadRequestException("El id de la ciudad no puede ser negativo");

        List<Donacion> donaciones = donacionRepository.findDonacionesByProducto(id);
        List<DonacionDTO> donacionDTOS = new ArrayList<>();
        for (Donacion donacion: donaciones) {
            donacionDTOS.add(mapper.convertValue(donacion, DonacionDTO.class));
        }

        return donacionDTOS;
    }
    public CustomMessageMonto countCantidadWithUserAndProduct( int idProductos){
        double sumatoriaDonaciones = donacionRepository.countCantidadWithUserAndProduct(idProductos);
        CustomMessageMonto customMessageMonto = CustomMessageMonto.builder()
                .messageId(UUID.randomUUID().toString())
                .sumatoriaDonaciones(sumatoriaDonaciones)
                .idProductos(idProductos)
                .build();
        log.info("sumatoria: " + customMessageMonto);
        donacionesSend.send(customMessageMonto);
        return customMessageMonto;
    }
}

