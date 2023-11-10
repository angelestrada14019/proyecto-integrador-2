import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NextLink from 'next/link'
import Image from "next/image";

const RegistroExitoso = () => {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        marginTop={20}
      >
        <Grid item>
          <Container maxWidth="sm">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              bgcolor="#4bc6b9"
              padding={2}
            >
              <Grid item xs={12}>
                <Typography variant="h4" align="center">
                  ¡Registro exitoso!
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                  Enviamos el link de verificación a tu correo electrónico.
                </Typography>
              </Grid>
              <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                <NextLink href="/" passHref>
                  <Image src="/logo.png" width={120} height={70} alt="Logo" />
                </NextLink>
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    );
  };
  
  export default RegistroExitoso;