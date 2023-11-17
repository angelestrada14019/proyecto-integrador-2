import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearDeterminate from './linear-determinate';
import NextLink from 'next/link'
import { Grid, Link as MUILink } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { calcularDiasFaltantes, truncateString } from 'utils/utils';
import { ListaDescripciones, ListaMultimedias, ProyectoFinal } from 'interfaces/proyect.type';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProyecto, getProyectoById } from 'services/proyectos/proyectos.service';


interface Props {
    proyecto: ProyectoFinal,
    widthParam: boolean
}

const MediaCard = ({ proyecto, widthParam }: Props) => {
    const [montoRecaudado, setMontoRecaudado] = useState<number>(0);
    const router = useRouter();


    const buscarMultimediaPorTipo = (multimedias: ListaMultimedias[], tipoBuscado: number): string | undefined => {
        const multimediaEncontrada = multimedias.find(multimedia => multimedia.tipo === tipoBuscado);
        return multimediaEncontrada ? multimediaEncontrada.url : undefined;
    };

    const buscarDescipcionPorTipo = (descripciones: ListaDescripciones[], tipoBuscado: number): string => {
        const descripcionEncontrada = descripciones.find(descripcion => descripcion.tipo === tipoBuscado);
        return descripcionEncontrada ? descripcionEncontrada.descripcion : "undefined";
    };

    const LISTA_MULTIMEDIAS = proyecto.multimedias
    const LISTA_DESCRIPCIONES = proyecto.descripciones
    const TIPO_LANDING = 1;

    useEffect(() => {
        const randomAmount = Math.floor(Math.random() * 10) * 5000;
        setMontoRecaudado(randomAmount);
    }, []);



    return (
        <Card sx={{ maxWidth: widthParam ? 600 : 345, boxShadow: "3px 1px 18px 2px rgba(0,0,0,0.05)" }}>
            <CardMedia
                sx={{ position: 'relative', height: 250 }}
                image={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, TIPO_LANDING)}
                title="green iguana">
                <div style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    zIndex: 1,
                    background: 'white',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <FavoriteIcon sx={{ color: '#a3a3a3', fontSize: 25 }} />
                </div>
            </CardMedia>
            <CardContent sx={{ display: "flex", alignItems: "center", paddingBottom: "0px" }}>
                <Button variant='contained' sx={{ color: "white", marginRight: "5px" }} color='secondary'>{proyecto.categoriasId.nombre}</Button>
                <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
                    <AccessTimeIcon />
                    Quedan {calcularDiasFaltantes(proyecto.fechaFinalizacion)} dias
                </Typography>
            </CardContent>
            <CardContent>
                <NextLink href={`/proyecto-donar/${proyecto.id}`}>
                    <MUILink variant="h6" sx={{ fontWeight: 800, textAlign: "initial" }}>{proyecto.nombre}</MUILink>
                </NextLink>

                <Typography variant="body2" color="text.secondary" marginTop={1}>
                    {truncateString(buscarDescipcionPorTipo(LISTA_DESCRIPCIONES, TIPO_LANDING))}
                </Typography>
            </CardContent>
            <CardContent>
                <Grid sx={{ display: 'flex', justifyContent: "space-between" }}>
                    <Typography gutterBottom variant="body1" fontWeight={"bold"} sx={{ color: "#abb8c3" }}>
                        Recaudados $ {montoRecaudado}
                    </Typography>
                    <Typography gutterBottom variant="body1" fontWeight={"bold"} sx={{ color: "#abb8c3" }}>
                        % {Math.round((montoRecaudado / proyecto.monto) * 100)}
                    </Typography>
                </Grid>
                <LinearDeterminate amount={montoRecaudado} finalAmount={proyecto.monto} />
                <Typography variant="body1" marginTop={1} fontWeight={"bold"} color="primary">
                    Objetivo:  $ {proyecto.monto}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default MediaCard

