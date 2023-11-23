import type { NextApiRequest, NextApiResponse } from 'next';
import { getDonacionesPorUsuario, postDonaciones } from 'services/donaciones/donaciones.service';

type Data = {
  data: any;
} | {
  error: string;
  message: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


  // const userIdLocalStorage = localStorage.getItem('user-info');
  // const userId = userIdLocalStorage ? JSON.parse(userIdLocalStorage).id : undefined;


  const userIdCookie = req.cookies && req.cookies["user-info"];
  const userId = userIdCookie ? JSON.parse(userIdCookie).id : undefined;

  if (req.method === "GET") {
    try {
      const donaciones = await getDonacionesPorUsuario(userId);
      res.status(200).json({ data: donaciones });
    } catch (error) {
      res.status(500).json({ error: "Error en el servidor", message: "Error al mostrar la donación." });
    }
  } else if (req.method === "POST") {

    try {
      const result = await postDonaciones(req.body);
      res.status(200).json({ data: result });
    } catch (err) {
      res.status(500).json({ error: "Error en el servidor", message: "Error al procesar la donación." });
    }
  } else {
    res.status(500).json({ error: "error 500", message: "Método no permitido" });
  }
}