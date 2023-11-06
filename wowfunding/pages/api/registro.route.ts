import { IUser } from 'interfaces/user.type';
import type {NextApiRequest, NextApiResponse} from 'next';
import {
    ERROR_SERVER,
    ERROR_INCORRECT_DATA,
    ERROR_METHOD_NOT_ALLOWED
} from "services/login/user-sesion.errors";

type Data = {
    data: any;
} | {
    error: string;
    message: string;
}


export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {

    if (req.method !== "POST") {
        res.status(405).json(ERROR_METHOD_NOT_ALLOWED);
        return;
    }
    try {
        
        const body: IUser = req.body;
        if (body !== null) {
            res.setHeader('set-cookie', 'access-confirmacion=true; path=/; semesite=lax; httponly')
            res.status(200).json({data: body});
            return
        }
        res.status(400).json(ERROR_INCORRECT_DATA);
    } catch (err) {
        res.status(500).json(ERROR_SERVER);
    }

}