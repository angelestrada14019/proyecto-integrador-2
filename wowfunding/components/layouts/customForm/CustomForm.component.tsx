import React, { FC } from 'react'

import { useForm, Controller, SubmitHandler } from "react-hook-form";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { Button, FormControl, InputLabel, MenuItem, Snackbar, Alert, Grid } from "@mui/material";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { ProjectInput } from 'checkout/checkout.types';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


interface Props {
    activeStep: number,
}

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

const STEP_TEXTS =
    [
        {
            title: "¡Empecemos!",
            subtitle: "Es importante que la descripción corta y la imagen de portada sean llamativos para que los usuarios quieran saber más"
        },
        {
            title: "Quiénes somos",
            subtitle: " Contále al mundo quién está detrás de este proyecto"
        },
        {
            title: "El proyecto",
            subtitle: "Contá detalladamente de que trata el proyecto. ¿Cómo se va a desarrollar?"
        },
        {
            title: "Conclusión",
            subtitle: "Explicale a los usuarios cuáles es el objetivo final de recaudación y algunas conclusiones finales"
        },
        {
            title: " Fijá objetivos",
            subtitle: "Indicá el monto total que necesita el proyecto y las fechas"
        },
    ]

const CustomForm: FC<Props> = ({ activeStep }) => {


    const {
        control,
        register,
        formState: { errors },
        handleSubmit,
        getValues,
        trigger
    } = useForm<ProjectInput>();

    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [mensaje, setMensaje] = useState('');
    const [error, setError] = useState(false);
    const [category, setCategory] = React.useState('');

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit: SubmitHandler<ProjectInput> = (data) => {
        alert(data)
        /*setError(true);
        setOpen(true);*/
    };

    const handleOutsideButtonClick = async () => {
        try {
          await trigger(); // Lanza la validación de errores
        } catch (error) {
          console.error('Error de validación:', error);
        }
      };

    const handleSelectChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
      };

    return (
        <Grid container spacing={3} sx={{ alignSelf: "center", marginTop: "2rem", display: "flex" }}>
            <Grid item xs={4}>
                < Typography variant='body1' sx={{ fontSize: "18px", fontWeight: "400" }}>
                    {STEP_TEXTS[activeStep].title}
                </Typography>

                <Typography variant='body1' sx={{ fontSize: "17px", fontWeight: "400", marginTop: "2em" }}>
                    {STEP_TEXTS[activeStep].subtitle}
                </Typography>
            </Grid >
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
                                    name="project.name"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: 'Este campo es obligatorio' }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.project?.name}
                                            helperText={errors.project?.name?.message}
                                            sx={{ mb: 2 }}
                                        />
                                    )}
                                />
                                <label>Seleccioná la categoria</label>
                                <Controller
                                    name="project.category"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            {...field}
                                            variant="outlined"
                                            fullWidth
                                            onChange={handleSelectChange}
                                            sx={{ mb: 2 }}>
                                            <MenuItem  value="Medio Ambiente">Medio Ambiente</MenuItem>            
                                            <MenuItem  value="Educación">Educación</MenuItem >            
                                            <MenuItem  value="Arte">Arte</MenuItem >            
                                            <MenuItem  value="Salud">Salud</MenuItem >            
                                            <MenuItem  value="Tecnología">Tecnología</MenuItem >            
                                            <MenuItem  value="Deportes">Deportes</MenuItem >            
                                            <MenuItem  value="Ciencia">Ciencia</MenuItem >            
                                            <MenuItem  value="Derechos Humanos">Derechos Humanos</MenuItem >            
                                            <MenuItem  value="Viajes">Viajes</MenuItem >            
                                        </Select>
                                    )}
                                />

                                <label>Descripción corta</label>

                                <Controller
                                    name="project.description_short"
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

                                <Controller
                                    name="project.image"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <Button
                                        {...field} 
                                        component="label" 
                                        variant="contained" 
                                        startIcon={<CloudUploadIcon />}
                                        sx={{ mb: 2 }}>
                                            Cargar imagen
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    )}
                                />


                            </>

                        )
                        }

                        {activeStep === 1 && (
                            <>
                                <label>Descripción</label>

                                <Controller
                                    name="project.about_us"
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

                                <Controller
                                    name="project.image2"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <Button
                                        {...field} 
                                        component="label" 
                                        variant="contained" 
                                        startIcon={<CloudUploadIcon />}
                                        sx={{ mb: 2 }}>
                                            Cargar imagen
                                            <VisuallyHiddenInput type="file" />
                                        </Button>
                                    )}
                                />


                            </>

                        )
                        }

                        {activeStep === 2 && (
                            <>
                                <label>Descripción</label>

                                <Controller
                                    name="project.description_large"
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

                            </>

                        )
                        }

                        {activeStep === 3 && (
                            <>
                                <label>Descripción</label>

                                <Controller
                                    name="project.conclusion"
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

                            </>

                        )
                        }

                        {activeStep === 4 && (
                            <>
                                <label>Fecha Inicio</label>
                                <br></br>
                                <Controller
                                    name="project.startDate"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <input
                                        {...field}
                                        style={{ width: '100%', height: '56px', borderRadius: '6px', border: '1px solid #8080808c', padding:'10px'}} 
                                        type="date" 
                                        id="start" />
                                    )}
                                />
                                <br></br><br></br>

                                <label>Fecha finalización</label>
                                <br></br>
                                <Controller
                                    name="project.endDate"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <input
                                        {...field}
                                        style={{ width: '100%', height: '56px', borderRadius: '6px', border: '1px solid #8080808c', padding:'10px'}} 
                                        type="date" 
                                        id="start" />
                                    )}
                                />
                                <br></br><br></br>
                                <label>Monto total a recaudar</label>
                                <Controller
                                    name="project.amount"
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
                                <Box>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        sx={{ mt: 2 }}
                                    >
                                        Enviar
                                    </Button>
                                </Box>

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
        </Grid >
    )
}

export default CustomForm