package com.dh.pi2.apidonacion.repository;

import com.dh.pi2.apidonacion.model.MetodoPago;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMetodoPagoRepository extends JpaRepository<MetodoPago, Integer> {
}
