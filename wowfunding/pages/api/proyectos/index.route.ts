import { ProyectoFinal } from "interfaces/proyect.type";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteProyecto, getProyecto, postProyecto } from "services/proyectos/proyectos.service";
import { ERROR_SERVER } from "services/sesion/user-sesion.errors";

type Data = {
    data: any;
} | { error: string, message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    res.setHeader("Content-Type", "application/json");
    const idNumber = parseInt(`${id}`);


    if (req.method == "POST") {
        try {

            const result = await postProyecto(req.body);
            res.status(200).json({ data: result });

        } catch (err) {

            res.status(500).json({ error: "en el error 500  ", message: "error 500" });
        }
        return
    } else if (req.method === "DELETE") {
        try {
          const { id: deleteId } = req.body;
        //   console.log("deletedId", deleteId)
          const deleteIdNumber = parseInt(`${deleteId}`);
          if (isNaN(deleteIdNumber)) {
            console.error("ID no válido:", deleteId);
            res.status(400).json({ error: "Error 400", message: "ID no válido" });
            return;
          }
          await deleteProyecto(deleteIdNumber);
          res.status(204).end();
        } catch (err) {
          console.error(err);
          res.status(500).json({ error: "Error 500  ", message: "Error al eliminar el proyecto" });
        }
        return;
      }
    try {
        const result: any | null = await getProyecto(idNumber);
        if (result === null) {
            res.status(404).json({ error: "No se encontró el proyecto", message: "El proyecto no existe" });
        } else {
            res.status(200).json(result);
        }
        return;
    } catch (err) {
        res.status(500).json(ERROR_SERVER)
    }



}