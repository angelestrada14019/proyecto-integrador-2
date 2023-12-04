import { ProyectoFinal } from "interfaces/proyect.type";
import { fetchApi, fetchApsi } from "utils/servicesUtils";


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

//TODO getProyectoPorUsuario
export const getProyectosUsuario = async (usuarioId: number) => {
  const response = await fetchApi(`/api-productos/productos?pageNumber=0&pageSize=12&usuariosId=${usuarioId}`);
  if (!response.ok) {
    throw new Error('Error al obtener proyectos del usuario');
  }
  return response.json();
};

//TODO deleteProyecto
export const deleteProyecto = async (proyectoId: number): Promise<void> => {
  try{
    // const response = await fetchApi(`/api-productos/productos/${proyectoId}`, {
    //   method: "DELETE",
    // });
    const response = await fetch(`http://44.202.51.198:8080/api-productos/productos/66`, {
      method: "DELETE",
    });
    if(!response.ok) {
      console.error("Error al eliminar el proyeto", response.statusText);
    throw new Error(response.statusText);
    }
  } catch (error) {
    console.error("Error al eliminar el proyecto", error);
    throw error;
  }
}

export const deleteProyectoAPI = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`/api/proyectos/`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      console.error("Error al eliminar el proyecto:", response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error("Error al eliminar el proyecto", error);
    throw error;
  }
  };


export const postProyecto = async (proyecto: ProyectoFinal): Promise<any> => {
    const dataProyecto = JSON.stringify(proyecto);
    const response = await fetch(`/api-productos/productos/creatAll`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: dataProyecto,
    });

    return await response.json();
}

// export const postProyectoAPI = async (proyecto: ProyectoFinal): Promise<any> => {
//     const dataProyecto = JSON.stringify(proyecto);
//     const response = await fetch(`/api/proyecto`, {
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         },
//         method: "POST",
//         body: dataProyecto,
//     });

//     return await response.json();
// }

