import React from 'react';
import NextLink from 'next/link';
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Link as MUILink,
  Snackbar,
  Box,
} from '@mui/material';
import { Alert } from '@mui/material';
import { useRouter } from 'next/router';
import { ProyectoFinal } from 'interfaces/proyect.type';
import {
  buscarDescipcionPorTipo,
  buscarMultimediaPorTipo,
  calcularDiasFaltantes,
  truncateString,
} from 'utils/utils';
import LinearDeterminate from './linear-determinate';
import { useState } from 'react';
import { deleteProyecto } from 'services/proyectos/proyectos.service';

interface Props {
  proyecto: ProyectoFinal;
  widthParam: boolean;
}

const MiProyectoCard: React.FC<Props> = ({ proyecto, widthParam }) => {
  const router = useRouter();

  const LISTA_MULTIMEDIAS = proyecto.multimedias;
  const LISTA_DESCRIPCIONES = proyecto.descripciones;
  const TIPO_LANDING = 1;

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<'success' | 'warning'>('success');

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
    <Card sx={{ boxShadow: '3px 1px 18px 2px rgba(0,0,0,0.05)' }}>
      <Grid container spacing={3}>
        <Grid item xs={8} md={4}>
        <CardMedia
            component="img"
            alt="Proyecto Image"
            height="100%" 
            width="100%"  
            image={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, TIPO_LANDING)}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <CardContent>
            <div>
              <NextLink href={`/proyecto-donar/${proyecto.id}`} passHref>
                <MUILink variant="h6" sx={{ fontWeight: 800, marginBottom: 1 }}>
                  {proyecto.nombre}
                </MUILink>
              </NextLink>
              <Typography variant="body2" color="text.secondary" marginTop={2}>
                {buscarDescipcionPorTipo(LISTA_DESCRIPCIONES, TIPO_LANDING)
                }
              </Typography>
            </div>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ marginTop: 4 }}
            >
              <Grid item xs={12} md={6}>
                <Typography
                  gutterBottom
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: '#abb8c3' }}
                >
                  Recaudados $ {proyecto.montoSumatoriaDonaciones}
                </Typography>
              </Grid>
              <Grid item xs={12} md={0.6}>
                <Typography
                  gutterBottom
                  variant="body1"
                  fontWeight="bold"
                  sx={{ color: '#abb8c3' }}
                >
                  %{' '}
                  {Math.round(
                    (proyecto.montoSumatoriaDonaciones / proyecto.monto) * 100
                  )}
                </Typography>
              </Grid>
            </Grid>

            <LinearDeterminate
              amount={proyecto.montoSumatoriaDonaciones}
              finalAmount={proyecto.monto}
            />

            <Typography
              variant="body1"
              marginTop={1}
              fontWeight="bold"
              color="primary"
              marginBottom={3}
            >
              Objetivo: $ {proyecto.monto}
            </Typography>

            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ paddingTop: '20px' }}
            >
              <Grid item xs={12} md={6}>
                <Button
                  variant="contained"
                  sx={{ color: 'white', marginRight: '5px' }}
                  color="secondary"
                >
                  {proyecto.categoriasId.nombre}
                </Button>
              </Grid>
              <Grid item xs={12} md={3.2}>
                <Typography variant="body2" color="text.secondary">
                  {calcularDiasFaltantes(proyecto.fechaFinalizacion) > 0
                    ? `Quedan ${calcularDiasFaltantes(
                        proyecto.fechaFinalizacion
                      )} días para que tu proyecto finalice`
                    : 'Campaña finalizada'}
                </Typography>
              </Grid>
            </Grid>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: { xs: '10px', md: 2 },
              }}
            >
              <Button
                variant="outlined"
                color="error"
                onClick={handleEliminarClick}
              >
                ELIMINAR
              </Button>
            </Box>
          </CardContent>
        </Grid>
      </Grid>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
        >
          {snackbarSeverity === 'success'
            ? 'Proyecto eliminado con éxito'
            : 'Error al eliminar el proyecto'}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default MiProyectoCard;

