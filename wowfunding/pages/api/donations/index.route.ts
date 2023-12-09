import type { NextApiRequest, NextApiResponse } from 'next';
import { postDonaciones } from 'services/donaciones/donaciones.service';
import { parse } from 'cookie';

type Data = {
  data: any;
} | {
  error: string;
  message: string;
}
type Cookies = {
  [key: string]: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const cookies: Cookies = parse(req.headers.cookie || '');

  if (req.method !== "POST") {

    res.status(500).json({ error: "error 500  ", message: "method not post" });
    return;
  }

  try {

    const cookieUser = cookies['access-confirmacion'] || '';
    const result = await postDonaciones(req.body, cookieUser);
    res.status(200).json({ data: result });

  } catch (err) {

    res.status(500).json({ error: "en el error 500  ", message: "error 500" });
  }

}