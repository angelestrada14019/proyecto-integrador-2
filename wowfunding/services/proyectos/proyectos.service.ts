import { ProjectInput } from "checkout/checkout.types";
import { ProyectoFinal } from "interfaces/proyect.type";
import { NextApiRequest } from "next";
import { fetchApi, fetchApsi } from "utils/servicesUtils";

export const getProyectos = async (offset?: number, limit?: number) => {
  const params = new URLSearchParams();
  if (offset) params.set("pageNumber", `${offset}`);
  if (limit) params.set("pageSize", `${limit}`);

  const data = await fetchApi(`api-productos/productos/getProducto?pageNumber=${offset}&pageSize=${limit}`);

  return data || {}; // Devuelve un objeto vacío si los datos son undefined
}
export const getProyecto = async (proyectoId: number) => {
  return fetchApi(`api-productos/productos/getProductoPorId/${proyectoId}`)
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

export const deleteProyecto = async (proyectoId: number, token: string | null): Promise<void> => {

  const response = await fetchApi(`api-productos/productos/${proyectoId}`, {
    token,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    method: "DELETE",
  });

  if (response !== 204) {
    throw new Error(`Error al eliminar el proyecto ${proyectoId}`);
  }
};

export const deleteProyectoAPI = async (id: number, token: string): Promise<void> => {
  try {

    const response = await fetchApi(`/api/proyectos/`, {
      token,
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


export const postProyecto = async (proyecto: ProjectInput, token: string): Promise<any> => {
  try {
    const dataProyecto = JSON.stringify(proyecto);
    const response = await fetchApi(`api-productos/productos/creatAll`, {
      token,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS',
        'Access-Control-Request-Method': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
      },
      method: "POST",
      body: dataProyecto,
    });

    return await response.json();
  } catch (error) {
    console.error("Error al eliminar el proyecto", error);
    throw error;
  }
}

export const postProyectoAPI = async (proyecto: ProyectoFinal): Promise<any> => {
  const dataProyecto = JSON.stringify(proyecto);
  const response = await fetch(`/api/proyectos`, {

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: dataProyecto,
  });

  return await response.json();
}
