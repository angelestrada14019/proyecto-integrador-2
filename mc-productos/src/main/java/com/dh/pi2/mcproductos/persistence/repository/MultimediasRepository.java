package com.dh.pi2.mcproductos.persistence.repository;

import com.dh.pi2.mcproductos.persistence.entity.Multimedias;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MultimediasRepository extends JpaRepository<Multimedias, Integer> {
}