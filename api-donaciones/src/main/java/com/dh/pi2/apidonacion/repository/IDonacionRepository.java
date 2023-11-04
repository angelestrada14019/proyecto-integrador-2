package com.dh.pi2.apidonacion.repository;

import com.dh.pi2.apidonacion.model.Donacion;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDonacionRepository extends JpaRepository<Donacion, Integer> {
}
