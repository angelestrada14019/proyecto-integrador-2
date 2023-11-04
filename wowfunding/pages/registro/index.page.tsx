// import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';

const Registro = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            marginTop={10}>
            <Grid item sm={10} lg={10} sx={{ backgroundColor: "#4bc6b929" }} padding={8} >
                <Typography variant='h2' textAlign="center" fontWeight="bold">Registro</Typography >
                <Typography sx={{
                    height: "4px",
                    width: "100px",
                    display: "block",
                    margin: "0px auto 0",
                    backgroundColor: "#ff3366"
                }}

                >
                </Typography>
                <Typography
                    variant='body1'
                    marginTop={2}>
                    Ya tenes una cuenta?
                    <NextLink href="/login" passHref>
                        <MUILink variant="body2" sx={{ fontSize: 18, marginRight: 5 }}> Ingresa aqui</MUILink>
                    </NextLink>
                </Typography >

                <form>
                    <Grid
                        container
                        direction="column"
                        gap={1}
                        marginTop={3}
                    >

                        <Typography variant='body1'>
                            Nombre*
                        </Typography>
                        <TextField placeholder="Nombre" />

                        <Typography variant='body1'>
                            Apellido*
                        </Typography>
                        <TextField placeholder="Apellido" />

                        <Typography variant='body1'>
                            Email*
                        </Typography>
                        <TextField placeholder="Email" />

                        <Typography variant='body1'>
                            Contraseña*
                        </Typography>
                        <TextField placeholder="Contraseña" />


                        <Button type='submit' size='large' variant="contained" color="primary" sx={{ fontWeight: "bold", marginTop: "4px", marginBottom: "10px" }} >REGISTRARME</Button>
                    </Grid>
                </form>



            </Grid>
        </Grid >
    )
}

export default Registro