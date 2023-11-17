import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import MiProyectoCard from '../ui/mi-proyecto-card';
import LandingTitles from '../ui/landing-titles';

const arrayDeMediCards = [
    {
        id: 1,
        titulo: 'Planta una Semilla de Esperanza',
        descripcionCorta: 'Ayuda a reforestar nuestro planeta y combatir el cambio climático',
        imagenPortada: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        fechaLimite: "10/01/2024",
        fechaInicio: "12/1/2022",
        montoRecaudado: 5000,
        montoARecaudar: 5646,
        nombreCreador: 'Juan Pérez',
        contacto: 'juan@example.com',
        categoria: {
            id: 1,
            categoria: 'Medio ambiente',
        },
        quienesSomos: 'Somos un equipo apasionado por la tecnología y la innovación',
        quienesSomosImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        descipcionGeneral: 'Descripción general del proyecto de demostración',
        descipcionGeneralImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg.jpg',
        conclusion: '¡Gracias por apoyar nuestro proyecto!',
        conclusionImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg.jpg',
    },
    {
        id: 2,
        titulo: 'Rescate de animales silvestres',
        descripcionCorta: 'Embárcate en una misión de protección de la vida silvestre.',
        imagenPortada: 'https://images.pexels.com/photos/5486960/pexels-photo-5486960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        fechaLimite: "30/11/2023",
        fechaInicio: "12/1/2022",
        montoRecaudado: 9500,
        montoARecaudar: 10000,
        nombreCreador: 'Juan Pérez',
        contacto: 'juan@example.com',
        categoria: {
            id: 1,
            categoria: 'Animales',
        },
        quienesSomos: 'Somos un equipo apasionado por la tecnología y la innovación',
        quienesSomosImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        descipcionGeneral: 'Descripción general del proyecto de demostración',
        descipcionGeneralImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        conclusion: '¡Gracias por apoyar nuestro proyecto!',
        conclusionImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
    },
    
];

const CardsMisProyectos = () => {
    return (
        <>
        <Grid sx={{backgroundColor: "#FF595E", paddingBottom: '30px'}} container direction="column" alignItems="center" spacing={4} style={{ marginBottom: '50px' }}>
          <Grid item>
          <LandingTitles smallTitle='Campañas iniciadas' title='Mis proyectos' color="black"/>
            {/* <Typography variant="h4" align="center" gutterBottom>
              Mis Proyectos
            </Typography> */}
          </Grid>
          <Grid item container justifyContent="center" spacing={2}>
            {arrayDeMediCards.map((card, index) => (
              <Grid item key={index}>
                <MiProyectoCard proyecto={card} widthParam={false} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </>
    )
}

export default CardsMisProyectos