package com.dh.pi2.mcproductos.persistence.queue;

import com.dh.pi2.mcproductos.persistence.message.CustomMessageMonto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class DonacionesListener {


    @RabbitListener(queues = {"${queue.pi2.gp2.productos_donaciones}"})
    public void receiveMovie(@Payload CustomMessageMonto customMessageMonto){

    }
}
