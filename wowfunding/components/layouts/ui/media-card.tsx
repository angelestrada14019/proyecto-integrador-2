import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearDeterminate from './linear-determinate';
import { Grid } from '@mui/material';

interface MediCardProp {
    title: string;
    descripcion: string;
    imagen: string;
    tiempoFinalizar: number;
    fondosRecaudados: number;
    fondosARecaudar: number;
}

const MediaCard = ({ title, imagen, descripcion, tiempoFinalizar, fondosRecaudados, fondosARecaudar }: MediCardProp) => {
    return (
        <Card sx={{ maxWidth: 345, boxShadow: "3px 1px 18px 2px rgba(0,0,0,0.05)" }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imagen}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descripcion}
                </Typography>

            </CardContent>
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="body2" color="text.secondary">
                    Quedan {tiempoFinalizar} dias
                </Typography>
                <Button size="small" sx={{ fontWeight: "bold" }} >VER MAS</Button>
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    $ {fondosRecaudados} recaudados
                </Typography>
                <LinearDeterminate amount={fondosRecaudados} finalAmount={fondosARecaudar} />
            </CardContent>

        </Card>
    );
}

export default MediaCard