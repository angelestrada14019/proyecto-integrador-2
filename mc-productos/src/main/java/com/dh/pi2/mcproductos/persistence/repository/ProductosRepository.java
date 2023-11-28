package com.dh.pi2.mcproductos.persistence.repository;


import com.dh.pi2.mcproductos.dto.ProductosDto;
import com.dh.pi2.mcproductos.dto.RequestProductosDto;
import com.dh.pi2.mcproductos.persistence.entity.Productos;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface ProductosRepository extends JpaRepository<Productos, Integer> {
    @Query("""
    select p from Productos p
    where (:#{#filtro.nombre} is null or p.nombre = :#{#filtro.nombre})
    and (:#{#filtro.fechaPublicacion} is null or p.fechaPublicacion = :#{#filtro.fechaPublicacion})
    and (:#{#filtro.fechaFinalizacion} is null or p.fechaFinalizacion = :#{#filtro.fechaFinalizacion})
    and (:#{#filtro.monto} is null or p.monto = :#{#filtro.monto})
    and (:#{#filtro.usuariosId} is null or p.usuariosId = :#{#filtro.usuariosId})
    and (:#{#filtro.categoriasId.nombre} is null or p.categoriasId.nombre = :#{#filtro.categoriasId.nombre})
    """)
    Page<Productos> listPRoductsByFilterRequestProductosDto(@Param("filtro") RequestProductosDto filtro,
                                                            @Param("pageable") Pageable pageable);

    @Transactional
    @Modifying
    @Query("update Productos p set p.montoSumatoriaDonaciones = ?1 where  p.id = ?2")
    void updateMontoTotalDonaciones(double montoSumatoriaDonacionesint, int id);






}