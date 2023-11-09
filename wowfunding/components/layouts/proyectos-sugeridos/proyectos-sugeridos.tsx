import React from 'react'
import LandingTitles from '../ui/landing-titles'
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
            categoria: 'Tecnología',
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
            categoria: 'Tecnología',
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
        titulo: 'Campaña de Conservación de la Naturaleza',
        descripcionCorta: 'Contribuye a la protección de la vida silvestre y la preservación de ecosistemas naturales.',
        imagenPortada: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        fechaLimite: "10/12/2023",
        fechaInicio: "12/1/2022",
        montoRecaudado: 8000,
        montoARecaudar: 84580,
        nombreCreador: 'Juan Pérez',
        contacto: 'juan@example.com',
        categoria: {
            id: 1,
            categoria: 'Tecnología',
        },
        quienesSomos: 'Somos un equipo apasionado por la tecnología y la innovación',
        quienesSomosImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        descipcionGeneral: 'Descripción general del proyecto de demostración',
        descipcionGeneralImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        conclusion: '¡Gracias por apoyar nuestro proyecto!',
        conclusionImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
    },
    {
        id: 4,
        titulo: 'Campaña de Salud Mental ancianos',
        descripcionCorta: 'Apoyo a personas que luchan contra problemas de salud mental proporcionando recursos y asesoramiento.',
        imagenPortada: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
        fechaLimite: "31/12/2023",
        fechaInicio: "12/1/2022",
        montoRecaudado: 15000,
        montoARecaudar: 67643,
        nombreCreador: 'Juan Pérez',
        contacto: 'juan@example.com',
        categoria: {
            id: 1,
            categoria: 'Tecnología',
        },
        quienesSomos: 'Somos un equipo apasionado por la tecnología y la innovación',
        quienesSomosImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        descipcionGeneral: 'Descripción general del proyecto de demostración',
        descipcionGeneralImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
        conclusion: '¡Gracias por apoyar nuestro proyecto!',
        conclusionImg: 'https://www.indh.cl/bb/wp-content/uploads/2013/05/470x273.jpg',
    },
];

const ProyectosSugeridos = () => {
    return (
        <Grid container sx={{ display: "flex" }}>
            <Typography variant='h5' fontWeight={"bold"} marginBottom={6}> Proyectos relacionados</Typography>
            <Grid container gap={6}>
                {arrayDeMediCards.map((card, index) =>
                    <MediaCard
                        key={index}
                        proyecto={card}
                        widthParam
                    />
                )}
            </Grid>
        </Grid>
    )
}

export default ProyectosSugeridos