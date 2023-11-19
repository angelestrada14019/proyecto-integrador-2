import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    // Simula datos desde el servidor
    const data = {
      columns: [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'age', headerName: 'Age', type: 'number', width: 90 },
      ],
      rows: [
        { id: 1, firstName: 'John', lastName: 'Doe', age: 25 },
        { id: 2, firstName: 'Jane', lastName: 'Doe', age: 30 },
        { id: 3, firstName: 'Bob', lastName: 'Smith', age: 40 },
      ],
    };
  
    res.status(200).json(data);
  }
  