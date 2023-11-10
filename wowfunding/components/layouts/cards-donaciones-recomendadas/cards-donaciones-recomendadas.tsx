import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import MediaCard from '../ui/media-card'

const arrayDeMediCards = [
    {
        id: 1,
        titulo: 'Campaña de Ayuda Humanitaria',
        descripcionCorta: 'Ayuda a proporcionar suministros médicos y alimentos a áreas afectadas por desastres naturales.',
        imagenPortada: 'http://udgsedecop.gobiernodigital.gob.mx/wp-content/uploads/sites/40/2020/09/FB_IMG_1578600211791-3-596x250.jpg',
        fechaLimite: "10/01/2024",
        fechaInicio: "12/1/2022",
        montoRecaudado: 5000,
        montoARecaudar: 5646,
        nombreCreador: 'Juan Pérez',
        contacto: 'juan@example.com',
        categoria: {
            id: 1,
            categoria: 'ONG',
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
        titulo: 'Campaña de Educación Infantil',
        descripcionCorta: 'Apoya a la educación de niños en situaciones de vulnerabilidad, proporcionando material educativo y apoyo escolar.',
        imagenPortada: 'https://neoattack.com/blog/wp-content/uploads/2022/03/marketing-escuelas-infantiles.jpg',
        fechaLimite: "10/11/2023",
        fechaInicio: "12/1/2022",
        montoRecaudado: 12000,
        montoARecaudar: 12460,
        nombreCreador: 'Juan Pérez',
        contacto: 'juan@example.com',
        categoria: {
            id: 1,
            categoria: 'Educación',
        },
        quienesSomos: 'Somos un equipo apasionado por la tecnología y la innovación',
        quienesSomosImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        descipcionGeneral: 'Descripción general del proyecto de demostración',
        descipcionGeneralImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        conclusion: '¡Gracias por apoyar nuestro proyecto!',
        conclusionImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
    },
    {
      id: 3,
      titulo: ' "Arte en la Calle"',
      descripcionCorta: 'Exposición Urbana- ¡Queremos embellecer nuestra ciudad con arte callejero de primer nivel!',
      imagenPortada: 'https://images.pexels.com/photos/1656059/pexels-photo-1656059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      fechaLimite: "10/12/2023",
      fechaInicio: "12/1/2022",
      montoRecaudado: 8000,
      montoARecaudar: 84580,
      nombreCreador: 'Juan Pérez',
      contacto: 'juan@example.com',
      categoria: {
          id: 1,
          categoria: 'Arte',
      },
      quienesSomos: 'Somos un equipo apasionado por la tecnología y la innovación',
      quienesSomosImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
      descipcionGeneral: 'Descripción general del proyecto de demostración',
      descipcionGeneralImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
      conclusion: '¡Gracias por apoyar nuestro proyecto!',
      conclusionImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
  },
];

const CardsDonacionesRecomendadas = () => {
    return (
        <>
        <Grid container direction="column" alignItems="center" spacing={2} >
          <Grid item>
            <Typography variant="h5" align="center" gutterBottom>
              Proyectos que necesitan tu ayuda
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" spacing={7}>
            {arrayDeMediCards.map((card, index) => (
              <Grid item key={index}>
                <MediaCard proyecto={card} widthParam={false} />
              </Grid>
            ))}
          </Grid>

        </Grid>
      </>
    )
}

export default CardsDonacionesRecomendadas