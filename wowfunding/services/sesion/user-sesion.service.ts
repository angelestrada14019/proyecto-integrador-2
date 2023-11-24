import { IUser, ILogin, IUserRegister } from "interfaces/user.type";
import { API_URL, fetchApi } from "utils/servicesUtils";


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


export const postRegistro = async (data: IUserRegister): Promise<any> => {
  const transformData =
  {
    ...data,
    profileUrl: "https://static.vecteezy.com/system/resources/previews/026/619/142/original/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg",
    userType: {
      id: 1
    }
  }
  const dataRegistro = JSON.stringify(transformData);

  const response = await fetchApi(`${API_URL}/users`,
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
export const postRegistroAPI = async (data: IUserRegister): Promise<any> => {
  const transformData =
  {
    ...data,
    profileUrl: "https://static.vecteezy.com/system/resources/previews/026/619/142/original/default-avatar-profile-icon-of-social-media-user-photo-image-vector.jpg",
    userType: {
      id: 1
    }
  }
  const dataRegistro = JSON.stringify(transformData);

  const response = await fetch(`/api/registro`,
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