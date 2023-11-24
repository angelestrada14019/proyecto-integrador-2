import { useRouter } from 'next/router';
import NextLink from 'next/link'

import { ProyectoFinal } from 'interfaces/proyect.type';
import { buscarDescipcionPorTipo, buscarMultimediaPorTipo, calcularDiasFaltantes, truncateString } from 'utils/utils';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import LinearDeterminate from './linear-determinate';
import { Alert, Box, Grid, Link as MUILink, Snackbar } from '@mui/material';
import { deleteProyecto } from 'services/proyectos/proyectos.service';
import { useState } from 'react';



interface Props {
    proyecto: ProyectoFinal,
    widthParam: boolean
}

const MiProyectoCard = ({ proyecto, widthParam }: Props) => {
    const router = useRouter();

    const LISTA_MULTIMEDIAS = proyecto.multimedias
    const LISTA_DESCRIPCIONES = proyecto.descripciones
    const TIPO_LANDING = 1;

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'warning'>('success');

    const handleEliminarClick = async () => {
        try {
          await deleteProyecto(proyecto.id);
          setSnackbarOpen(true);
        } catch (error) {
            setSnackbarSeverity('warning');
            setSnackbarOpen(true);
        }
      };

      const handleSnackbarClose = () => {
        setSnackbarOpen(false);
      };
      
    return (
        <Card sx={{ display: 'flex', boxShadow: "3px 1px 18px 2px rgba(0,0,0,0.05)" }}>
            <CardMedia
                sx={{ width: 200, flexShrink: 0 }}
                component="img"
                alt="Proyecto Image"
                height="270"
                image={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, TIPO_LANDING)}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: '1 0 auto' }}>
                    <div>
                        <NextLink href={`/proyecto-donar/${proyecto.id}`} passHref>
                            <MUILink variant="h6" sx={{ fontWeight: 800, marginBottom: 1 }}>  {proyecto.nombre}</MUILink>
                        </NextLink>
                        <Typography variant="body2" color="text.secondary" marginTop={1}>
                            {truncateString(buscarDescipcionPorTipo(LISTA_DESCRIPCIONES, TIPO_LANDING))}
                        </Typography>
                    </div>
                    
                    <Grid sx={{ display: 'flex', justifyContent: "space-between", marginTop: 2 }}>
                        <Typography gutterBottom variant="body1" fontWeight={"bold"} sx={{ color: "#abb8c3" }}>
                            Recaudados $ {proyecto.montoSumatoriaDonaciones}
                        </Typography>
                        <Typography gutterBottom variant="body1" fontWeight={"bold"} sx={{ color: "#abb8c3" }}>
                            % {Math.round((proyecto.montoSumatoriaDonaciones / proyecto.monto) * 100)}
                        </Typography>
                    </Grid>
                    <LinearDeterminate amount={proyecto.montoSumatoriaDonaciones} finalAmount={proyecto.monto} />
                    <Typography variant="body1" marginTop={1} fontWeight={"bold"} color="primary">
                        Objetivo:  $ {proyecto.monto}
                    </Typography>
                    <CardContent sx={{ display: "flex", alignItems: "center", paddingBottom: "0px", flex: '1 0 auto' }}>
                    <Button variant='contained' sx={{ color: "white", marginRight: "5px" }} color='secondary'>{proyecto.categoriasId.nombre}</Button>
                    <Typography variant="body2" color="text.secondary" sx={{ display: "flex", alignItems: "center" }}>
                    {calcularDiasFaltantes(proyecto.fechaFinalizacion) > 0 ?
                        `Quedan ${calcularDiasFaltantes(proyecto.fechaFinalizacion)} dias`
                        :
                        "Campaña finalizada"
                    }
                    </Typography>
                </CardContent>
                <Box mt={2}>
          <Button variant="outlined" color="error" onClick={handleEliminarClick}>
            ELIMINAR
          </Button>
        </Box>
                </CardContent>
            </Box>
            <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      >
      <Alert elevation={6} variant="filled" onClose={handleSnackbarClose} severity={snackbarSeverity}>
          {snackbarSeverity === 'success' ? 'Proyecto eliminado con éxito' : 'Error al eliminar el proyecto'}
        </Alert>
      </Snackbar>
        </Card>
    );
}

export default MiProyectoCard;
