import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearDeterminate from './linear-determinate';
import NextLink from 'next/link'
import { Grid, Link as MUILink } from '@mui/material';
import { Proyecto } from 'interfaces/proyect.type';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { calcularDiasFaltantes, truncateString } from 'utils/utils';


interface Props {
    proyecto: Proyecto,
    widthParam: boolean
}

const MediaCard = ({ proyecto, widthParam }: Props) => {

    return (
        <Card sx={{ maxWidth: widthParam? 600 :345, boxShadow: "3px 1px 18px 2px rgba(0,0,0,0.05)" }}>
            <CardMedia
                sx={{ position: 'relative', height: 250 }}
                image={proyecto.imagenPortada}
                title="green iguana">
                <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1,
                    background: 'white', // Color de fondo gris
                    width: '40px', // Ancho del círculo
                    height: '40px', // Altura del círculo
                    borderRadius: '50%', // Borde circular
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <FavoriteIcon sx={{ color: '#a3a3a3', fontSize: 25 }} />
                </div>
            </CardMedia>
            <CardContent sx={{ display: "flex", alignItems: "center", paddingBottom: "0px" }}>
                <Button variant='contained' sx={{ color: "white", marginRight: "5px" }} color='secondary'>{proyecto.categoria.categoria}</Button>

                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTimeIcon />
                    Quedan {calcularDiasFaltantes(proyecto.fechaLimite)} dias
                </Typography>

            </CardContent>
            <CardContent>
                <NextLink href={`/proyecto-donar/${proyecto.id}`} passHref>
                    <MUILink variant="h6" sx={{ fontWeight: 800 }}>  {proyecto.titulo}</MUILink>
                </NextLink>
                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    {truncateString(proyecto.descripcionCorta)}
                </Typography>

            </CardContent>
            <CardContent>
                <Grid sx={{ display: 'flex', justifyContent: "space-between" }}>

                    <Typography gutterBottom variant="body1" fontWeight={"bold"} sx={{ color: "#abb8c3" }}>
                        Recaudados $ {proyecto.montoRecaudado}
                    </Typography>
                    <Typography gutterBottom variant="body1" fontWeight={"bold"} sx={{ color: "#abb8c3" }}>
                        % {Math.round((proyecto.montoRecaudado / proyecto.montoARecaudar) * 100)}
                    </Typography>

                </Grid>
                <LinearDeterminate amount={proyecto.montoRecaudado} finalAmount={proyecto.montoARecaudar} />
                <Typography variant="body1" marginTop={1} fontWeight={"bold"} color="primary">
                    Objetivo:  $ {proyecto.montoARecaudar}
                </Typography>


            </CardContent>

        </Card>
    );
}

export default MediaCard

