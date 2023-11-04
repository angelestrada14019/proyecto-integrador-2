package com.dh.pi2.apidonacion.service;
import com.dh.pi2.apidonacion.dto.DonacionDTO;
import com.dh.pi2.apidonacion.model.Donacion;
import com.dh.pi2.apidonacion.repository.IDonacionRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.ws.rs.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class DonacionService {

    @Autowired
    private IDonacionRepository donacionRepository;

    @Autowired
    private MetodoPagoService metodoPagoService;

    @Autowired
    ObjectMapper mapper;
    // Método para crear una donación
    public DonacionDTO createDonacion (DonacionDTO donacionDTO) throws BadRequestException {

        if(donacionDTO.getCantidad() == 0 || donacionDTO == null)
            throw new BadRequestException("El donacion no puede ser 0 o null");
        Long metodoPagoId = donacionDTO.getMetodoPagoID().getId();
        Donacion donacion = mapper.convertValue(donacionDTO, Donacion.class);

        /*if (this.findDonacionByID(donacion.getId()) != null)
            throw new BadRequestException("Este donacion ya existe");*/

        donacionDTO = mapper.convertValue(donacionRepository.save(donacion), DonacionDTO.class);
        donacionDTO.setMetodoPagoID(metodoPagoService.findMPById(metodoPagoId));

        return donacionDTO;
    }

    // Método para obtener una donación por su ID
    public DonacionDTO getDonacionById(Long id) {
        Optional<Donacion> optionalDonacion = donacionRepository.findById(id);
        if (optionalDonacion.isPresent()) {
            Donacion donacion = optionalDonacion.get();
            return mapToDonacionDTO(donacion);
        } else {
            // Puedes manejar la excepción o el caso en que la donación no existe
            return null;
        }
    }

    // Método para actualizar una donación por su ID
    public DonacionDTO updateDonacion(Long id, DonacionDTO donacionDTO) {
        Optional<Donacion> optionalDonacion = donacionRepository.findById(id);
        if (optionalDonacion.isPresent()) {
            Donacion donacion = optionalDonacion.get();
            // Actualizar los atributos de la donación con los datos del DTO
            donacion.setComentario(donacionDTO.getComentario());
            donacion.setCantidad(donacionDTO.getCantidad());
            donacion.setFechaDonacion(donacionDTO.getFechaDonacion());
            donacion.setMetodoPagoID(donacionDTO.getMetodoPagoID());
            donacion.setIdUsuarios(donacionDTO.getIdUsuarios());
            donacion.setIddonacionos(donacionDTO.getIddonacionos());
            // Guardar la donación actualizada en el repositorio
            donacionRepository.save(donacion);
            return mapToDonacionDTO(donacion);
        } else {
            // Puedes manejar la excepción o el caso en que la donación no existe
            return null;
        }
    }

    // Método para eliminar una donación por su ID
    public void deleteDonacion(Long id) {
        donacionRepository.deleteById(id);
    }

    // Método para mapear Donacion a DonacionDTO
    private DonacionDTO mapToDonacionDTO(Donacion donacion) {
        DonacionDTO donacionDTO = new DonacionDTO();
        donacionDTO.setComentario(donacion.getComentario());
        donacionDTO.setCantidad(donacion.getCantidad());
        donacionDTO.setFechaDonacion(donacion.getFechaDonacion());
        donacionDTO.setMetodoPagoID(donacion.getMetodoPagoID());
        donacionDTO.setIdUsuarios(donacion.getIdUsuarios());
        donacionDTO.setIddonacionos(donacion.getIddonacionos());
        return donacionDTO;
    }
}

