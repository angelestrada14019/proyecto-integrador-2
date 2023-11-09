package com.dh.pi2.apidonacion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class ApiDonacionesApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiDonacionesApplication.class, args);
	}

}
