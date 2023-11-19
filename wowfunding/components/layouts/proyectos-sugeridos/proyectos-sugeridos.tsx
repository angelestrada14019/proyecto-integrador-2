import React from 'react'
import LandingTitles from '../ui/landing-titles'
import { Button, Grid, Typography } from '@mui/material'
import MediaCard from '../ui/media-card'
import { ProyectoFinal } from 'interfaces/proyect.type'



interface Props {
    listaProyectos: ProyectoFinal[]
}

const ProyectosSugeridos = ({listaProyectos}:Props) => {
    return (
        <Grid container sx={{ display: "flex" }}>
            <Typography variant='h5' fontWeight={"bold"} marginBottom={6}> Proyectos relacionados</Typography>
            <Grid container gap={6}>
                {listaProyectos.map((card, index) =>
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