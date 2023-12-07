
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

// interface Props {
//     valoresParam: [string],
//     valoresTexto:string,
//     handleFiltro: void,

// }

const BasicSelect = ({ valoresParam, valoresTexto, handleFiltro }: any) => {
    console.log('valoresParam', valoresParam)
    const [valores, setValores] = useState("")

    const handleChange = (event: SelectChangeEvent) => {
        setValores(event.target.value as string);
        handleFiltro(event.target.name)
    };

    return (
        <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{valoresTexto}</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={valores}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>valor</MenuItem>
                    {valoresParam?.map((index: number, valor: string) => {
                        <MenuItem value={valor}>{valor}</MenuItem>

                    })}

                </Select>
            </FormControl>
        </Box>
    );
}
export default BasicSelect