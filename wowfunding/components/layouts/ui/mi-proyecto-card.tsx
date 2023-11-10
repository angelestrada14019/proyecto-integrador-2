import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearDeterminate from './linear-determinate';
import NextLink from 'next/link'
import { Box, Grid, Link as MUILink } from '@mui/material';
import { Proyecto } from 'interfaces/proyect.type';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { calcularDiasFaltantes, truncateString } from 'utils/utils';

interface Props {
    proyecto: Proyecto,
    widthParam: boolean
}

const MiProyectoCard = ({ proyecto, widthParam }: Props) => {
    return (
        <Card sx={{ display: 'flex', boxShadow: "3px 1px 18px 2px rgba(0,0,0,0.05)" }}>
            <CardMedia
                sx={{ width: 200, flexShrink: 0 }}
                component="img"
                alt="Proyecto Image"
                height="270"
                image={proyecto.imagenPortada}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '1 0 auto' }}>
                    <div>
                        <NextLink href={`/proyecto-donar/${proyecto.id}`} passHref>
                            <MUILink variant="h6" sx={{ fontWeight: 800, marginBottom: 1 }}>  {proyecto.titulo}</MUILink>
                        </NextLink>
                        <Typography variant="body2" color="text.secondary" marginTop={1}>
                            {truncateString(proyecto.descripcionCorta)}
                        </Typography>
                    </div>
                    
                    <Grid sx={{ display: 'flex', justifyContent: "space-between", marginTop: 2 }}>
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
                    <CardContent sx={{ display: "flex", alignItems: "center", paddingBottom: "0px", flex: '1 0 auto' }}>
                    <Button variant='contained' sx={{ color: "white", marginRight: "5px" }} color='secondary'>{proyecto.categoria.categoria}</Button>
                    <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
                        Quedan {calcularDiasFaltantes(proyecto.fechaLimite)} dias
                    </Typography>
                </CardContent>
                </CardContent>
            </Box>
        </Card>
    );
}

export default MiProyectoCard;
