package com.dh.pi2.mcproductos.persistence.message;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomMessageMonto {
    private String messageId;
    private double sumatoriaDonaciones;
    private int idUsuarios;
    private int idProductos;
}
