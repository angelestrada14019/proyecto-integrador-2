package com.dh.pi2.mcproductos.persistence.repository;


import com.dh.pi2.mcproductos.dto.RequestProductosDto;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ProductosRepository extends JpaRepository<Productos, Integer> {
    @Query("""
    select p from Productos p
    where (:#{#filtro.nombre} is null or p.nombre = :#{#filtro.nombre})
    and (:#{#filtro.fechaPublicacion} is null or p.fechaPublicacion = :#{#filtro.fechaPublicacion})
    and (:#{#filtro.fechaFinalizacion} is null or p.fechaFinalizacion = :#{#filtro.fechaFinalizacion})
    and (:#{#filtro.monto} is null or p.monto = :#{#filtro.monto})
    and (:#{#filtro.categoriasId.nombre} is null or p.categoriasId.nombre = :#{#filtro.categoriasId.nombre})
    """)
    Page<Productos> listPRoductsByFilterRequestProductosDto(@Param("filtro") RequestProductosDto filtro,
                                                            @Param("pageable") Pageable pageable);


}