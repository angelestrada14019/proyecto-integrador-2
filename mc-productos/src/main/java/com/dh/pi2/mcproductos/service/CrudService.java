package com.dh.pi2.mcproductos.service;

public interface CrudService<D extends Object>{

    D crear(D dto);
    D obtenerId(int id);
    D actualizar(D dto);
    void eliminar(int id);
}
