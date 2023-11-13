package com.dh.pi2.apidonacion.message.queue;

import com.dh.pi2.apidonacion.message.CustomMessageMonto;
import lombok.RequiredArgsConstructor;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DonacionesSend {
    private final RabbitTemplate rabbitTemplate;
    private final Queue queue;

    public void send(CustomMessageMonto customMessageMonto) {
        this.rabbitTemplate.convertAndSend(this.queue.getName(), customMessageMonto);
    }
}
