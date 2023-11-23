import { ProyectoFinal } from "interfaces/proyect.type";
import { NextApiRequest, NextApiResponse } from "next";
import { deleteProyecto, getProyecto, getProyectosPorUsuario } from "services/proyectos/proyectos.service";
import { ERROR_SERVER } from "services/sesion/user-sesion.errors";

type Data = ProyectoFinal | ProyectoFinal[] | { error: string; message: string };

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id, idUsuario } = req.query;
  res.setHeader("Content-Type", "application/json");
  
  if (req.method === "DELETE" && id) {
    const idNumber = parseInt(`${id}`);
    try {
      await deleteProyecto(idNumber);
      res.status(204).end(); 
      return;
    } catch (err) {
      console.error(err);
      res.status(500).json(ERROR_SERVER);
      return;
    }
  }

  if (id) {

    const idNumber = parseInt(`${id}`);
    try {
      const result: ProyectoFinal | null = await getProyecto(idNumber);

      if (result === null) {
        res.status(404).json({ error: "No se encontró el proyecto", message: "El proyecto no existe" });
      } else {
        res.status(200).json(result);
      }

      return;
    } catch (err) {
      console.error(err); 
      res.status(500).json(ERROR_SERVER);
    }
  } else if (idUsuario) {
    // Obtener proyectos por usuario
    const idUsuarioNumber = parseInt(`${idUsuario}`);
    try {
      const result: ProyectoFinal[] | null = await getProyectosPorUsuario(idUsuarioNumber);

      if (result === null || result.length === 0) {
        res.status(404).json({ error: "No se encontraron proyectos", message: "El usuario no tiene proyectos" });
      } else {
        res.status(200).json(result);
      }

      return;
    } catch (err) {
      console.error(err); 
      res.status(500).json(ERROR_SERVER);
    }
  } else {
    res.status(400).json({ error: "Parámetros incorrectos", message: "Se requiere 'id' o 'idUsuario' en los parámetros" });
  }
}


