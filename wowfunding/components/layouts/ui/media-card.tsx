import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearDeterminate from './linear-determinate';

const MediaCard = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>

            </CardContent>
            <CardActions>
                <Typography variant="body2" color="text.secondary">
                    Quedan x dias
                </Typography>
                <Button size="small">VER MAS</Button>
            </CardActions>
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    $ 1000 recaudados
                </Typography>
                <LinearDeterminate />
            </CardContent>

        </Card>
    );
}

export default MediaCard