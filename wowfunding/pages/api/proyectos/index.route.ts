import { ProyectoFinal } from "interfaces/proyect.type";
import { NextApiRequest, NextApiResponse } from "next";
import { getProyecto } from "services/proyectos/proyectos.service";
import { ERROR_SERVER } from "services/sesion/user-sesion.errors";

type Data = ProyectoFinal | { error: string, message: string }

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const { id } = req.query;
    res.setHeader("Content-Type", "application/json");
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
        res.status(500).json(ERROR_SERVER)
    }

}

