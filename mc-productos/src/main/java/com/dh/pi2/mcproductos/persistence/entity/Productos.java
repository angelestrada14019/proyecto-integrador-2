package com.dh.pi2.mcproductos.persistence.entity;

import jakarta.persistence.*;
import jakarta.ws.rs.DefaultValue;
import lombok.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Builder
@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "productos")
public class Productos {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    @Column(name = "id")
    private int id;
    @Column(name = "Nombre")
    private String nombre;
    @Column(name = "Resumen")
    private String resumen;
    @Column(name = "Descripcion")
    private String descripcion;
    @Column(name = "Fecha_Publicacion")
    private LocalDateTime fechaPublicacion;
    @Column(name = "Fecha_Finalizacion")
    private LocalDateTime fechaFinalizacion;
    @Column(name = "Monto")
    private double monto;
    @Column(name = "USUARIOS_id")
    private int usuariosId;
    @Column(name = "monto_sumatoria_donaciones")
    @DefaultValue(value = "0")
    private double montoSumatoriaDonaciones;
    @ManyToOne
    @JoinColumn(name = "CATEGORIAS_id", referencedColumnName = "id")
    private Categorias categoriasId;

    @OneToMany(mappedBy = "productosId", orphanRemoval = true)
    private List<Multimedias> multimediasList;

}
