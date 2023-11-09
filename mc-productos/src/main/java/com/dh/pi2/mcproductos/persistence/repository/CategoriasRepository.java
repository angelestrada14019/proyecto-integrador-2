package com.dh.pi2.mcproductos.persistence.repository;

import com.dh.pi2.mcproductos.persistence.entity.Categorias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepository extends JpaRepository<Categorias, Integer> {
}