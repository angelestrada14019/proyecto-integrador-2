
const API_URL = "http://localhost:8080"

const fetchApi = async (endpoint: string, urlParams?: string) => {
    const url = `${API_URL}/${endpoint}${urlParams || ''}`
    const response = await fetch(url);
    return await response.json();
}

export const getProyectos = async (offset?: number, limit?: number) => {
    const params = new URLSearchParams();
    if (offset) params.set("pageNumber", `${offset}`);
    if (limit) params.set("pageSize", `${limit}`);
    const data = await fetchApi(`api-productos/productos?pageNumber=${offset}&pageSize=${limit}`);
    return data || {}; // Devuelve un objeto vacío si los datos son undefined
}

export const getProyecto = async (proyectoId: number) => {
    return fetchApi(`api-productos/productos/${proyectoId}`)

}

export const getProyectoById = async (proyectoId: number): Promise<any> => {
    const response = await fetch(`/api/proyectos/${proyectoId}`);
    
    return await response.json();
};


//TODO agregar post de proyectos