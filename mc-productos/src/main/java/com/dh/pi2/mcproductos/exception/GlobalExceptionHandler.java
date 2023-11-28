package com.dh.pi2.mcproductos.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(RuntimeException.class)
    private ResponseEntity<Map<String,String>> exceptionHandler(Exception exception) {
        Map<String,String> exeptionMessage = new HashMap<>();
        exeptionMessage.put("message", exception.getMessage());
        return ResponseEntity.badRequest().body(exeptionMessage);
    }
}
