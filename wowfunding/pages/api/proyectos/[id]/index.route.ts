import type { NextApiRequest, NextApiResponse } from "next";
import { ERROR_SERVER } from "services/sesion/user-sesion.errors";
import { getProyecto } from "services/proyectos/proyectos.service";
import { ProyectoFinal } from "interfaces/proyect.type";

type Data = ProyectoFinal | { error: string; message: string };

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  const { id } = req.query;
  res.setHeader("Content-Type", "application/json");
  const idNumber = parseInt(`${id}`);

  try {
    const result: ProyectoFinal = await getProyecto(idNumber);
    res.status(200).json(result);
    return;
  } catch (err) {
    res.status(500).json(ERROR_SERVER);
  }
}