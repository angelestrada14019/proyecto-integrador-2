package com.dh.pi2.mcproductos.persistence.queue;

import com.dh.pi2.mcproductos.persistence.entity.Productos;
import com.dh.pi2.mcproductos.persistence.message.CustomMessageMonto;
import com.dh.pi2.mcproductos.persistence.repository.ProductosRepository;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class DonacionesListener {

    @Autowired
    private ProductosRepository productosRepository;

    @RabbitListener(queues = {"${queue.pi2.gp2.productos_donaciones}"})
    public void receiveMovie(@Payload CustomMessageMonto customMessageMonto){
        try {
            productosRepository.updateMontoTotalDonaciones(customMessageMonto.getSumatoriaDonaciones(),
                    customMessageMonto.getIdUsuarios(),customMessageMonto.getIdProductos());
        }catch (Exception e){
            throw new RuntimeException(e.getMessage());
        }

    }
}
