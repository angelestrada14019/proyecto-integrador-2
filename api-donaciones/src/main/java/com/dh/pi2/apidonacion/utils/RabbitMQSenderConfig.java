package com.dh.pi2.apidonacion.utils;

import org.springframework.amqp.core.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class RabbitMQSenderConfig {
    @Value("${queue.pi2.gp2.productos_donaciones}")
    private String queueName;

    @Bean
    public Queue getNameQueue() {
        return new Queue(this.queueName, true);
    }
}
