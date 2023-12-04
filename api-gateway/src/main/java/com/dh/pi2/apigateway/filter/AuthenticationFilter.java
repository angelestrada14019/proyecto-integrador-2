package com.dh.pi2.apigateway.filter;

import com.dh.pi2.apigateway.exceptions.BadRequestException;
import com.dh.pi2.apigateway.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.core.Ordered;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Arrays;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

//    @Autowired
//    private RestTemplate restTemplate;

    @Autowired
    private JwtUtil jwtUtil;
    @Autowired
    private RouterValidator routerValidator;
    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (((exchange, chain) -> {
            if (routerValidator.isSecured.test(exchange.getRequest())){
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)){
                    try {
                        throw new BadRequestException("missing auth header");
                    } catch (BadRequestException e) {
                        throw new RuntimeException(e);
                    }
                }

                String authHeader=exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader!=null && authHeader.startsWith("Bearer ")){
                    authHeader=authHeader.substring(7);
                }
                try {
//                    restTemplate.getForObject("http://USERS-API//validate?token"+authHeader,String.class);
                        jwtUtil.validateToken(authHeader);
                }catch (Exception e) {
                    System.out.println("invalid access...!");
                    try {
                        throw new BadRequestException("unauthorized access to app");
                    } catch (BadRequestException ex) {
                        throw new RuntimeException(ex);
                    }
                }
            }
           return chain.filter(exchange);
        }));
    }

    public static class Config{

    }
}
