import { Donaciones } from "interfaces/donaciones.type";
import { NextApiRequest, NextApiResponse } from "next";
import { postDonaciones } from "services/donaciones/donaciones.service";
import { ERROR_INCORRECT_DATA, ERROR_METHOD_NOT_ALLOWED, ERROR_SERVER } from "services/sesion/user-sesion.errors";

type Data = {
    data?: Donaciones;
    error?: string;
    message?: string;
};




// pages/api/donaciones.ts


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Lógica para manejar la solicitud POST
    res.status(200).json({ success: true });
  } else {
    // Retorna un error si no es una solicitud POST
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
