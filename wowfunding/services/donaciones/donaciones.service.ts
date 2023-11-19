import { Donaciones } from "interfaces/donaciones.type";
import { fetchApi } from "utils/servicesUtils";

export const postDonaciones = async (data: Donaciones, urlParams?: string) => {
    const dataDonacion = JSON.stringify(data);
    const response = await fetchApi(`api-donaciones/donacion${urlParams || ''}`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: dataDonacion,
    });
    return await response.json();
}


export const postDonacionApi = async (data: Donaciones, urlParams?: string): Promise<any> => {
    const response = await fetch(`/api/donaciones/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    return await response.json();
  };
  