import { Donaciones } from "interfaces/donaciones.type";
import { fetchApi } from "utils/servicesUtils";

export const postDonaciones = async (data: Donaciones) => {
  const response = await fetchApi(`api-donaciones/donacion`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: 'Bearer {eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDEzODg0NjAsImV4cCI6MTcwMTM5MDI2MH0.rcS1G4ANifLyhy4nZv5xA3WerOSmbs4D7iU1-ooyuv8}'
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
      Authorization: 'Bearer {eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDEzODg0NjAsImV4cCI6MTcwMTM5MDI2MH0.rcS1G4ANifLyhy4nZv5xA3WerOSmbs4D7iU1-ooyuv8}'
    },

    method: "POST",
    body: dataCkeckout,
  });

  return await response.json();
};
