import { ProyectoFinal } from "interfaces/proyect.type";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteProyecto, getProyecto, postProyecto } from "services/proyectos/proyectos.service";
import { ERROR_SERVER } from "services/sesion/user-sesion.errors";
import { parse } from 'cookie';
type Data = {
    data: any;
} | { error: string, message: string }
type Cookies = {
    [key: string]: string;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    const cookies: Cookies = parse(req.headers.cookie || '');
    const cookieInfo = cookies['access-confirmacion']
    const cookieObj = JSON.parse(cookieInfo as any);
    const token = cookieObj.token;
    res.setHeader("Content-Type", "application/json");
    const idNumber = parseInt(`${id}`);

    if (req.method == "POST") {
        try {

            const result = await postProyecto(req.body,token);
            res.status(200).json({ data: result });

        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "en el error 500  ", message: "error 500" });
        }
        return
    } else if (req.method === "DELETE") {
        try {
          const { id: deleteId } = req.body;
          const deleteIdNumber = parseInt(`${deleteId}`);
          if (isNaN(deleteIdNumber)) {
            console.error("ID no válido:", deleteId);
            res.status(400).json({ error: "Error 400", message: "ID no válido" });
            return;
          }
          await deleteProyecto(deleteIdNumber, token);
          console.log("Token Delete API", token)
          res.status(204).end();
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: "Error 500  ", message: "Error al eliminar el proyecto" });
        }
        return;
      }

}