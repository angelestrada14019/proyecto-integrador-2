package com.dh.pi2.apidonacion.message;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CustomMessageMonto {
    private String messageId;
    private double sumatoriaDonaciones;
    private int idProductos;
}
