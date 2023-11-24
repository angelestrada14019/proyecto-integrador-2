import type { NextApiRequest, NextApiResponse } from 'next';
import { postDonaciones } from 'services/donaciones/donaciones.service';

type Data = {
  data: any;
} | {
  error: string;
  message: string;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {


  if (req.method !== "POST") {

    res.status(500).json({ error: "error 500  ", message: "method not post" });
    return;
  }
  
  try {

    const result = await postDonaciones(req.body);
    res.status(200).json({ data: result });

  } catch (err) {

    res.status(500).json({ error: "en el error 500  ", message: "error 500" });
  }

}