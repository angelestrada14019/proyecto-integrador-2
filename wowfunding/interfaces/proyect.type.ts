export type Proyectos = {
    resultados: ProyectoFinal[]
}


// export type Proyecto = {
//     id: number;
//     titulo: string;
//     imagenPortada: string;
//     descripcionCorta: string;
//     montoRecaudado: number;
//     montoARecaudar: number;
//     fechaInicio:string;
//     fechaLimite: string;
//     nombreCreador: string;
//     contacto: string;
//     categoria: ProyectoCategoria;
//     quienesSomos: string;
//     quienesSomosImg: string;
//     descipcionGeneral: string;
//     descipcionGeneralImg: string;
//     conclusion: string;
//     conclusionImg: string;
// }

export type ProyectoFinal = {
    categoriaID: Categoria;
    descripcion: string;
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

export type ListaProyectos = {
    offset: number;
    limit: number;
    results: ProyectoFinal[]
}

export type Categoria = {
    id: number;
    descripcion: string;
    nombre: string;

}
export type ListaMultimedias = {
    id: number;
    descripcion: string;
    nombre: string;

}