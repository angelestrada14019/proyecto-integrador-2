import { Button, Grid, Snackbar, Typography } from '@mui/material';
import { CustomTextField } from '../layouts/ui/custom-text-field-props';
import { ErrorMessage } from '@hookform/error-message';
import * as yup from "yup";
import { schema } from '../layouts/login/schema';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';

const DonacionesForm = () =>{
    const [error, setError] = useState<string | null>(null);
    type DataForm = yup.InferType<typeof schema>
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const {
        control,
        formState: { errors },
        handleSubmit,
    } = useForm<DataForm>({ resolver: yupResolver(schema), defaultValues: {} });

    const onSubmit = async (data: any) => {
        
    };

    return <Grid container spacing={0} sx={{maxWidth:"650px"}}>
        <Grid container sx={{ display:"flex", justifyContent:"center", marginTop:6 }}>
            <Grid item xs={5}>
                <Image src="https://placekitten.com/239/136"  width={"239px"} height={"136px"} alt="Perfil" ></Image>
                <Typography variant='body1' sx={{fontSize:"13px", fontWeight:"400", marginTop:4}}>
                    Estás donando a Nombre del proyecto
                </Typography>
                <Typography variant='body1' sx={{fontSize:"13px", fontWeight:"400", marginTop: 1}}>
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
                            name="
                            email"
                            label="$"
                            type="text"
                            control={control}
                        />
                        <Typography variant='caption' color='red'>
                            <ErrorMessage errors={errors} name="username" />
                        </Typography>
                        
                        <Typography variant='caption' color='red'>
                            <ErrorMessage errors={errors} name="password" />
                        </Typography>
                        <Button type='submit' size='large' variant="contained" color="primary" sx={{ fontWeight: "bold"}} >Aceptar</Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={12}>
                <Typography variant='body1' sx={{fontSize:"13px", fontWeight:"400"}}>
                    Tu donativo
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Grid container sx={{display:"flex", justifyContent:"center"}}>
                    <Typography variant='body1' sx={{fontSize:"20px", fontWeight:"400"}}>
                        $ XXX,XX
                    </Typography>
                </Grid>
            </Grid>
        </Grid>

    </Grid>
}

export default DonacionesForm;