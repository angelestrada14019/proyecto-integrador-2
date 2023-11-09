import { IUser, ILogin } from "interfaces/user.type";

const API_URL = 'https://localhost/api'

export const postLogin = async (data: ILogin): Promise<any> => {
  const dataLogin = JSON.stringify(data);
  // const response = await fetch(`${API_URL}/login`,
  const response = await fetch(`/api/login`,
   {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: dataLogin,
  });

  return await response.json();
};


export const postRegistro = async (data: IUser): Promise<any> => {
    const dataRegistro = JSON.stringify(data);
    // const response = await fetch(`${API_URL}/registro`,
    const response = await fetch(`/apí/registro`,
     {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: dataRegistro,
    });
  
    return await response.json();
  };