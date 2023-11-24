import { Button, Grid, Snackbar, Typography } from '@mui/material';
import { CustomTextField } from '../layouts/ui/custom-text-field-props';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';
import { schema } from './schema';
import { obtenerFechaActualFormateada } from 'utils/utils';
import { postDonacionApi, postDonaciones } from 'services/donaciones/donaciones.service';
import { useRouter } from 'next/router';
import { Donaciones } from 'interfaces/donaciones.type';

const DonacionesForm = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    type DataForm = yup.InferType<typeof schema>
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const {
        control,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

    const onSubmit = async (data: any) => {
        const dataValues = getValues();
        const comentario = dataValues.comentario ?? "";

        const dataDonacion: Donaciones =
        {
            comentario,
            cantidad: parseFloat(dataValues.cantidad),
            fechaDonacion: obtenerFechaActualFormateada(),
            metodoPagoID: {
                id: 11
            },
            idUsuarios: 18,
            idProductos: 57
        }

        const response = await postDonacionApi(dataDonacion);

        try {
            if (!response.error) {
                setError(`Su donacion se realizo con exito`);
                setOpenSnackbar(true);
                // router.push("/")
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



    return (<Grid container spacing={0} sx={{ maxWidth: "650px" }}>
        <Grid container sx={{ display: "flex", justifyContent: "center", marginTop: 6 }}>
            <Grid item xs={5}>
                <Image src="https://placekitten.com/239/136" width={"239px"} height={"136px"} alt="Perfil" ></Image>
                <Typography variant='body1' sx={{ fontSize: "13px", fontWeight: "400", marginTop: 4 }}>
                    Estás donando a Nombre del proyecto
                </Typography>
                <Typography variant='body1' sx={{ fontSize: "13px", fontWeight: "400", marginTop: 1 }}>
                    Beneficiario del proyecto: Nombre
                </Typography>
            </Grid>

            <Grid item xs={7}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        container
                        direction="column"
                        gap={1}
                    >

                        <Typography variant='body1'>
                            Indique la cantidad a donar
                        </Typography>
                        <CustomTextField
                            name="cantidad"
                            label="$"
                            type="number"
                            control={control}
                        />
                        <Typography variant='caption' color='red'>
                            <ErrorMessage errors={errors} name="cantidad" />
                        </Typography>

                        <Typography variant='body1'>
                            Dejar un comentario
                        </Typography>
                        <CustomTextField
                            name="comentario"
                            label="Comentario"
                            type="text"
                            control={control}
                        />
                        <Typography variant='caption' color='red'>
                            <ErrorMessage errors={errors} name="comentario" />
                        </Typography>

                        <Button type='submit' size='large' variant="contained" color="primary" sx={{ fontWeight: "bold" }} >Aceptar</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={12}>
                <Typography variant='body1' sx={{ fontSize: "13px", fontWeight: "400" }}>
                    Tu donativo
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                    <Typography variant='body1' sx={{ fontSize: "20px", fontWeight: "400" }}>
                        $ XXX,XX
                    </Typography>
                </Grid>
            </Grid>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message={error || ""} //TODO  modificar modal para notificaciones
            />
           
        </Grid>

    </Grid>)
}

export default DonacionesForm;