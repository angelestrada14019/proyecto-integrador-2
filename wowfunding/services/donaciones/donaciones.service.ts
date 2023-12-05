import { Donaciones } from "interfaces/donaciones.type";
import { fetchApi } from "utils/servicesUtils";


export const postDonaciones = async (data: Donaciones) => {
  const response = await fetchApi(`api-donaciones/donacion`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 'Bearer {eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDE4MTU3NTgsImV4cCI6MTcwMTgxNzU1OH0.rvZF75-j_qU7nPhibERiRXTcGsm4gWxJjNYbP8BMkHI}'
    },
    method: "POST",
    body: data
  });
  return await response;
}

export const postDonacionApi = async (data: Donaciones): Promise<any> => {
  const dataCkeckout = JSON.stringify(data);
  const response = await fetch(`/api/donations`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 'Bearer {eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDE4MTU3NTgsImV4cCI6MTcwMTgxNzU1OH0.rvZF75-j_qU7nPhibERiRXTcGsm4gWxJjNYbP8BMkHI}'
    },

    method: "POST",
    body: dataCkeckout,
  });
  return await response.json();
};

//TODO getDonacionesUsuario no funciona, falta el getDonacionesUsuarioAPI (?)
export const getDonacionesUsuario = async (usuarioId: number) => {
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDE4MTU3NTgsImV4cCI6MTcwMTgxNzU1OH0.rvZF75-j_qU7nPhibERiRXTcGsm4gWxJjNYbP8BMkHI'
  const response = await fetchApi(`/api-donaciones/donacion/usuario/${usuarioId}`, {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  },
    method: "GET",
});
return await response.json();
};

