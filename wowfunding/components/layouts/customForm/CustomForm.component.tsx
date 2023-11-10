import React, { FC } from 'react'

import { useForm, Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import { Button, FormControl, InputLabel, MenuItem, Snackbar, Alert, Grid } from "@mui/material";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { CheckoutInput } from 'checkout/checkout.types';

interface Props {
    activeStep: number,
}

const CustomForm: FC<Props> = ({ activeStep }) => {


    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<CheckoutInput>();

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit = async (data: CheckoutInput) => {
        setError(true);
        setOpen(true);
    };


    return (
        <Grid container spacing={3} sx={{ alignSelf: "center", marginTop: "2rem", display:"flex" }}>
            <Grid item xs={4}>
                {activeStep === 0 && <>
                    <Typography variant='body1' sx={{fontSize:"18px", fontWeight:"400"}}>
                        ¡Empecemos!
                    </Typography>

                    <Typography variant='body1' sx={{fontSize:"17px", fontWeight:"400", marginTop:"2em"}}>
                        Es importante que la descripción corta y la imagen de portada sean llamativos para que los usuarios quieran saber más
                    </Typography></>
                }

                {activeStep === 1 && <>
                    <Typography variant='body1' sx={{fontSize:"18px", fontWeight:"400"}}>
                        Quiénes somos
                    </Typography>

                    <Typography variant='body1' sx={{fontSize:"17px", fontWeight:"400", marginTop:"2em"}}>
                        Contále al mundo quién está detrás de este proyecto
                    </Typography></>
                }

                {activeStep === 2 && <>
                    <Typography variant='body1' sx={{fontSize:"18px", fontWeight:"400"}}>
                        El proyecto
                    </Typography>

                    <Typography variant='body1' sx={{fontSize:"17px", fontWeight:"400", marginTop:"2em"}}>
                        Contá detalladamente de que trata el proyecto. ¿Cómo se va a desarrollar?
                    </Typography></>
                }

                {activeStep === 3 && <>
                    <Typography variant='body1' sx={{fontSize:"18px", fontWeight:"400"}}>
                        Conclusión
                    </Typography>

                    <Typography variant='body1' sx={{fontSize:"17px", fontWeight:"400", marginTop:"2em"}}>
                        Explicale a los usuarios cuáles es el objetivo final de recaudación y algunas conclusiones finales
                    </Typography></>
                }

                {activeStep === 4 && <>
                    <Typography variant='body1' sx={{fontSize:"18px", fontWeight:"400"}}>
                        Fijá objetivos
                    </Typography>

                    <Typography variant='body1' sx={{fontSize:"17px", fontWeight:"400", marginTop:"2em"}}>
                        Indicá el monto total que necesita el proyecto y las fechas
                    </Typography></>
                }
            </Grid>
            <Grid item xs={8}>
                <Paper
                elevation={8}
                sx={{ p: "32px", display: "flex", flexDirection: "column", gap: 3 }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {activeStep === 0 && (
                            <>
                                <label>Nombre del proyecto</label>
                                <Controller
                                    name="customer.name"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />
                                <label>Seleccioná la categoria</label>
                                <Controller
                                    name="customer.lastname"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <Select 
                                        {...field} 
                                        variant="outlined"
                                        fullWidth
                                        options={[
                                            { value: "chocolate", label: "Chocolate" },
                                            { value: "strawberry", label: "Strawberry" },
                                            { value: "vanilla", label: "Vanilla" }
                                        ]} 
                                        sx={{ mb: 2 }}
                                    />
                                    )}
                                />

                                <label>Descripción corta</label>

                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={4}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />

                                <label>Imagen de portada</label>
                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />


                            </>

                        )
                        }

                        {activeStep === 1 && (
                            <>
                                <label>Descripción</label>

                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={10}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />

                                <label>Imagen</label>
                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />


                            </>

                        )
                        }

                        {activeStep === 2 && (
                            <>
                                <label>Descripción</label>

                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={10}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />

                                <label>Imagen</label>
                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />


                            </>

                        )
                        }

                        {activeStep === 3 && (
                            <>
                                <label>Descripción</label>

                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            multiline
                                            rows={10}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />

                                <label>Imagen</label>
                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />


                            </>

                        )
                        }

                        {activeStep === 4 && (
                            <>
                                <label>Fecha Inicio</label>

                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />

                                <label>Fecha finalización</label>
                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />

                                <label>Monto total a recaudar</label>
                                <Controller
                                    name="customer.email"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />


                            </>

                        )
                        }
                    </form>
                </Paper>

            </Grid>
           

        <Snackbar
        open={open}
        autoHideDuration={6000} // Duración en milisegundos
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert severity={error ? 'error' : 'success'} onClose={handleClose}>
            {mensaje}
            </Alert>
      </Snackbar>
        </Grid>
    )
}

export default CustomForm