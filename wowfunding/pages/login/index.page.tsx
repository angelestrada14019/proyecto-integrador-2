// import React from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';

const Login = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            marginTop={10}>
            <Grid sx={{ backgroundColor: "#4bc6b929" }} padding={8} >
                <Typography variant='h2' textAlign="center" fontWeight="bold">LOGIN</Typography >
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
                    Todavia no te registraste?

                    <NextLink href="/registro" passHref>
                        <MUILink variant="body2" sx={{ fontSize: 18, marginRight: 5 }}> Registrate aqui</MUILink>
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
                            Usuario*
                        </Typography>
                        <TextField placeholder="usuario" />
                        <Typography variant='body1'>
                            Contraseña*
                        </Typography>
                        <TextField placeholder="usuario" />
                        <Button type='submit' size='large' variant="contained" color="primary" sx={{ fontWeight: "bold", marginTop: "4px", marginBottom: "10px" }} >INICIAR SESION</Button>
                    </Grid>
                </form>
                <NextLink href="/" passHref>
                    <MUILink variant="body2">¿Olvidaste tu contraseña?</MUILink>
                </NextLink>


            </Grid>
        </Grid >
    )
}

export default Login