package com.dh.pi2.apigateway.exceptions;

public class BadRequestException extends Exception{
    public BadRequestException(String message){
        super(message);
    }
}

