package com.dh.pi2.apidonacion.dto;
import com.dh.pi2.apidonacion.model.MetodoPago;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class MetodoPagoDTO {
    private int id;
    private String name;
}
