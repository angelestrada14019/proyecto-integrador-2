import { ProyectoFinal } from "interfaces/proyect.type";
import { fetchApi, fetchApsi } from "utils/servicesUtils";

export const getProyectos = async (offset?: number, limit?: number) => {
  const params = new URLSearchParams();
  if (offset) params.set("pageNumber", `${offset}`);
  if (limit) params.set("pageSize", `${limit}`);
  // const data = await fetchApi(`api-productos/productos?pageNumber=${offset}&pageSize=${limit}`);
  //TODO revisar si se puede hacer este tipo de llamado para reemplazar el de abajo
  const data = await fetchApi(`api-productos/productos/getProducto?pageNumber=${offset}&pageSize=${limit}`);

  const endpoint = 'api-productos/productos/getProducto';
  // const data = await fetchApi(`${endpoint}?${params}`);

  return data || {}; // Devuelve un objeto vacío si los datos son undefined
}

export const getProyecto = async (proyectoId: number) => {
  return fetchApi(`api-productos/productos/${proyectoId}`)
}

export const getProyectoById = async (proyectoId: number): Promise<any> => {
  const response = await fetch(`/api/proyectos/${proyectoId}`);

  return await response.json();
};

export const getProyectosUsuario = async (usuarioId: number, offset?: number, limit?: number) => {
  const params = new URLSearchParams();

  params.set("usuariosId", `${usuarioId}`);

  if (offset) params.set("pageNumber", `${offset}`);
  if (limit) params.set("pageSize", `${limit}`);

  const data = await fetchApi(`api-productos/productos/getProducto?pageNumber=${offset}&pageSize=${limit}&usuariosId=${usuarioId}`);
  return data || {};
};

export const deleteProyecto = async (proyectoId: number): Promise<void> => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDE4MTU3NTgsImV4cCI6MTcwMTgxNzU1OH0.rvZF75-j_qU7nPhibERiRXTcGsm4gWxJjNYbP8BMkHI'

  console.log("deletedID", proyectoId)
  const response = await fetchApi(`api-productos/productos/${proyectoId}`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    method: "DELETE",
  });
  console.log(response)
  if (response.status !== 204) {
    throw new Error(`Error al eliminar el proyecto ${proyectoId}`);
  }
};

export const deleteProyectoAPI = async (id: number): Promise<void> => {
  try {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDE4MTU3NTgsImV4cCI6MTcwMTgxNzU1OH0.rvZF75-j_qU7nPhibERiRXTcGsm4gWxJjNYbP8BMkHI'
    const response = await fetch(`/api/proyectos/`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ id }),
    });
    if (response.status !== 204) {
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

