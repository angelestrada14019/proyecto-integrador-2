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
import { postProyecto, postProyectoAPI } from 'services/proyectos/proyectos.service';
import { ProyectoFinal, ListaDescripciones, Categoria, ListaMultimedias } from 'interfaces/proyect.type';


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
    const [error, setError] = useState<string | null>(null);
    const [category, setCategory] = React.useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const onSubmit: SubmitHandler<ProjectInput> = async (data) => {
        
        const descripcionesL: ListaDescripciones[] = [
            {
                tipo: 1,
                descripcion: data.project.description_short
            },
            {
                tipo: 2,
                descripcion: data.project.about_us
            },
            {
                tipo: 3,
                descripcion: data.project.description_large
            },
            {
                tipo: 3,
                descripcion: data.project.conclusion
            }
        ];

        const categoria: Categoria = {
            id:16,
        }

        const multimediasL: ListaMultimedias[] = [
            {
                tipo: 1,
                url: data.project.image
            },
            {
                tipo: 2,
                url: data.project.image2
            },
            {
                tipo: 3,
                url: data.project.image3
            },
            {
                tipo: 3,
                url: data.project.image4
            }
        ];

        const proyecto: ProyectoFinal = {
            categoriasId: categoria,
            descripciones: descripcionesL,
            fechaPublicacion: `${data.project.startDate} 00:00:00`,
            fechaFinalizacion: `${data.project.endDate} 00:00:00`,   
            monto: data.project.amount,  
            montoSumatoriaDonaciones: 500,  
            multimedias: multimediasL,
            nombre: data.project.name,
            usuariosId: 18      
        };

        /*const testJson: ProyectoFinal = {
            "nombre": "Nuevos Horizontes Test 7",
            "fechaPublicacion": "2023-11-30 21:55:00",
            "fechaFinalizacion": "2025-02-30 03:00:00",
            "monto": 12000,
            "usuariosId": 18,
            "categoriasId": {
                "id": 16
            },
            "multimedias": [
                {
                    "url": "https://s3-pi2-gp2-wowfunding.s3.amazonaws.com/NuevosHorizontes/PortadaNuevosHorizontes.jpg",
                    "tipo": 1
                },
                {
                    "url": "https://s3-pi2-gp2-wowfunding.s3.amazonaws.com/NuevosHorizontes/Img1NuevosHorizontes.jpg",
                    "tipo": 2
                },
                {
                    "url": "https://s3-pi2-gp2-wowfunding.s3.amazonaws.com/NuevosHorizontes/Img2NuevosHorizontes.jpg",
                    "tipo": 3
                },
                {
                    "url": "https://s3-pi2-gp2-wowfunding.s3.amazonaws.com/NuevosHorizontes/Img3NuevosHorizontes.jpg",
                    "tipo": 4
                }
            ],
            "descripciones": [
                {
                    "descripcion": "¡Abre tu mente a nuevas experiencias! Únete a Nuevos Horizontes y apoya proyectos que fomentan el entendimiento cultural y la exploración.",
                    "tipo": 1
                },
                {
                    "descripcion": "Descubre Nuevos Horizontes es una iniciativa liderada por viajeros apasionados y defensores de la diversidad cultural. Nuestro equipo incluye exploradores, antropólogos y amantes de la aventura que creen en la importancia de conocer y apreciar las diversas culturas del mundo.",
                    "tipo": 2
                },
                {
                    "descripcion": "Colaboraremos con organizaciones de turismo sostenible, comunidades locales y expertos en cultura para financiar proyectos que promuevan el turismo responsable y la preservación cultural. Nuestra estrategia se centrará en la creación de programas educativos, intercambios culturales y la promoción de destinos turísticos que respeten el entorno y las tradiciones locales.",
                    "tipo": 3
                },
                {
                    "descripcion": "El objetivo final de Descubre Nuevos Horizontes es fomentar la comprensión global y el respeto por la diversidad cultural a través del turismo sostenible. Con tu apoyo, podremos financiar proyectos que permitan a las comunidades locales beneficiarse de manera equitativa del turismo y preservar su patrimonio cultural para las generaciones futuras.",
                    "tipo": 4
                }
            ]
        };*/

        const response = await postProyectoAPI(proyecto);

        try {
            if (!response.error) {
                setError(`Su proyecto fue creado con exito`);
                setOpenSnackbar(true);
                router.push("/")
            } else {
                setError(`${response.error}- - -${response.message}`);
                setOpenSnackbar(true);
            }

        } catch (error: any) {
            setError(`${response.error}- - -${response.message}`);
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
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
                                            //onChange={handleSelectChange}
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
                                <label>Imagen portada</label>
                                <Controller
                                    name="project.image"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.project?.image}
                                            helperText={errors.project?.name?.message}
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

                                <label>Imagen </label>
                                <Controller
                                    name="project.image2"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.project?.image2}
                                            helperText={errors.project?.image2?.message}
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

                                <label>Imagen </label>
                                <Controller
                                    name="project.image3"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.project?.image3}
                                            helperText={errors.project?.image3?.message}
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

                                <label>Imagen </label>
                                <Controller
                                    name="project.image4"
                                    control={control}
                                    defaultValue={""}
                                    rules={{ required: true }}
                                    render={({ field }: any) => (
                                        <TextField
                                            {...field}
                                            type="text"
                                            variant="outlined"
                                            fullWidth
                                            error={!!errors.project?.image4}
                                            helperText={errors.project?.image4?.message}
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
                                    defaultValue={0}
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

            <Grid container>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={error || ""} //TODO  modificar modal para notificaciones
            />

            </Grid>
        </Grid >

        
    )
}

export default CustomForm