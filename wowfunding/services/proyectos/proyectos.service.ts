
const API_URL = "https://localhost:3000"

const fetchApi = async (endpoint: string, urlParams?: string) => {
    const url = `${API_URL}/${endpoint}${urlParams || ''}`
    const response = await fetch(url);
    return await response.json();
}

export const getProyectos = async (offset?: number, limit?: number) => {
    const params = new URLSearchParams();
    if (offset) params.set("offset", `${offset}`);
    if (limit) params.set("limit", `${limit}`);
    return fetchApi("comics", params.toString());
}


export const getProyecto = async (proyectoId: number) =>{
    const data = await fetch(`${API_URL}/proyecto/${proyectoId}`)
    console.log('data', data)

    const results = [{
        proyectoResumido: {
          id: 1,
          titulo: 'Proyecto de Demostración',
          imagenPortada: 'imagenPortada.jpg',
          descripcionCorta: 'Este es un proyecto de demostración',
          montoRecaudado: 5000,
          montoARecaudar: 10000,
          fechaInicio: '2023-11-01',
          fechaLimite: '2023-12-01',
        },
        nombreCreador: 'John Doe',
        contacto: 'john.doe@example.com',
        categoria: 'Categoría de Demo',
        quienesSomos: 'Somos un equipo dedicado a demostraciones',
        quienesSomosImg: 'imagenQuienesSomos.jpg',
        descipcionGeneral: 'Descripción general del proyecto de demostración',
        descipcionGeneralImg: 'imagenDescripcionGeneral.jpg',
        conclusion: 'Conclusión del proyecto de demostración',
        conclusionImg: 'imagenConclusion.jpg',
      }]


    if (results.length > 0) {
        const proyecto = results[0];
        return proyecto;
    } else return null;
}


