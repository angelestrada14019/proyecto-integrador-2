import { Donaciones } from "interfaces/donaciones.type";
import { fetchApi } from "utils/servicesUtils";

export const postDonaciones = async (data: Donaciones) => {
  const response = await fetchApi(`api-donaciones/donacion`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
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
    },
    method: "POST",
    body: dataCkeckout,
  });
  return await response.json();
};
