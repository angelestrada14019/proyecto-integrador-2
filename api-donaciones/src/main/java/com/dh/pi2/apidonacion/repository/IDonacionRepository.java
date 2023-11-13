package com.dh.pi2.apidonacion.repository;

import com.dh.pi2.apidonacion.model.Donacion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface IDonacionRepository extends JpaRepository<Donacion, Integer> {
    @Query("SELECT d FROM Donacion d WHERE d.idUsuarios = ?1")
    List<Donacion> findDonacionesByUsuario(int id);

    @Query("SELECT d FROM Donacion d WHERE d.idProductos = ?1")
    List<Donacion> findDonacionesByProducto(int id);

    @Query("select count(d.cantidad) from Donacion d where d.idUsuarios = ?1 and d.idProductos = ?2")
    double countCantidadWithUserAndProduct(int idUsuarios, int idProductos);


}
