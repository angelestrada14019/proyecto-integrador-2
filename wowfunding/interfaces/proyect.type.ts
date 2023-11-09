export type Proyectos = {
    resultados: Proyecto[]
}

export type Proyecto = {
    id: number;
    titulo: string;
    imagenPortada: string;
    descripcionCorta: string;
    montoRecaudado: number;
    montoARecaudar: number;
    fechaInicio:string;
    fechaLimite: string;
    nombreCreador: string;
    contacto: string;
    categoria: ProyectoCategoria;
    quienesSomos: string;
    quienesSomosImg: string;
    descipcionGeneral: string;
    descipcionGeneralImg: string;
    conclusion: string;
    conclusionImg: string;
}

export type ProyectoCategoria ={
    id: number;
    categoria: string;

}

export type listaProyectos = {
    offset: number,
    limit: number,
    results: Proyecto[]
}

