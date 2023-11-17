export type Proyectos = {
    resultados: ProyectoFinal[]
}

export type ProyectoFinal = {
    categoriasId: Categoria;
    descripciones: ListaDescripciones[];
    fechaFinalizacion: string;
    fechaPublicacion: string;
    id: number;
    monto: number;
    multimedias: ListaMultimedias[]
    nombre: string;
    resumen: string;
    usuarioId: number;

}

export type ProyectoCategoria ={
    id: number;
    categoria: string;

}

// export type ListaProyectos = {
//     offset: number;
//     limit: number;
//     results: ProyectoFinal[]
// }

export type Categoria = {
    id: number;
    descripcion: string;
    nombre: string;

}
export type ListaMultimedias = {
    id: number;
    url: string;
    tipo: number;

}

export type ListaDescripciones = {
    id: number;
    tipo: number;
    descripcion: string;
}