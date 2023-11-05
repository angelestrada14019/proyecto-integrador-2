package com.dh.pi2.mcproductos;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class McProductosApplication {

	public static void main(String[] args) {
		SpringApplication.run(McProductosApplication.class, args);
	}

}
