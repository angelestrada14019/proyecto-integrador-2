import { Avatar, Button, Card, Container, Grid, Stack, Typography } from '@mui/material';
import BloqueProyectoImg from 'components/layouts/ui/bloque-imagen-proyecto';
import LinearDeterminate from 'components/layouts/ui/linear-determinate';
import { Spinner } from 'components/layouts/ui/spinner';
import BasicTabs, { CustomTabPanel } from 'components/layouts/ui/tabs';
import { ListaMultimedias, ProyectoFinal, Proyectos } from 'interfaces/proyect.type'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react'
import { getProyecto, getProyectos } from 'services/proyectos/proyectos.service';
import NextLink from 'next/link'
import { Link as MUILink } from '@mui/material';
import GeneralHeader from 'components/layouts/header/general-header.component';
import CommentBlock from 'components/layouts/coment-section/coment-block';
import EmailIcon from '@mui/icons-material/Email';
import { buscarDescipcionPorTipo, buscarMultimediaPorTipo, calcularDiasFaltantes, esFechaExpirada } from 'utils/utils';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProyectosSugeridos from 'components/layouts/proyectos-sugeridos/proyectos-sugeridos';

interface Props {
    proyecto: ProyectoFinal;
    proyectos: Proyectos;
}


const ProyectoID = ({ proyecto, proyectos }: Props) => {

    const LISTA_MULTIMEDIAS = proyecto.multimedias
    const LISTA_DESCRIPCIONES = proyecto.descripciones
    const porcentajeFinal = Math.round((proyecto.montoSumatoriaDonaciones / proyecto.monto) * 100)

    const router = useRouter();

    if (router.isFallback === true) {
        return <Spinner />;
    }


    return (
        <>
            <GeneralHeader />
            <Container maxWidth="xl"  >
                <Stack direction={"column"} display={'flex'} justifyContent={'center'} spacing={5}>
                    <Typography marginTop={5} variant='h3' fontWeight={"bold"} textAlign={"center"}>{proyecto.nombre}</Typography>

                    <Grid container>
                        <Grid item xs={8}>
                            <Image src={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, 1)}
                                width={950}
                                height={630}
                                alt={proyecto.nombre}
                            />

                        </Grid>
                        <Grid item xs={4}>
                            <Grid sx={{ display: "flex", flexDirection: "column" }} >
                                <Grid >
                                    <Button variant='contained' sx={{ color: "white", marginBottom: "15px" }} color='secondary'>{proyecto.categoriasId.nombre}</Button>
                                    <Typography variant={'h5'} fontWeight={"bold"} >Resumen del proyecto</Typography>
                                    <Typography variant={'body1'} marginTop={2}>{buscarDescipcionPorTipo(proyecto.descripciones, 1)}</Typography>
                                    <Grid sx={{ display: "flex" }} gap={2} marginBottom={4} marginTop={4}>

                                        <Avatar src={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, 1)} alt={proyecto.nombre} />
                                        <Grid>
                                            <Typography variant='body1' fontWeight={900}>{"proyecto.nombreusuario"}</Typography>
                                            <Typography>Contactarse con el creador:<EmailIcon /> </Typography>

                                        </Grid>
                                    </Grid>

                                    <LinearDeterminate amount={proyecto.monto} finalAmount={proyecto.montoSumatoriaDonaciones} />
                                    <Grid sx={{ display: "flex", justifyContent: "space-between" }} marginTop={2}>
                                        <Grid sx={{ display: "flex" }}>

                                            <Typography variant='h6' marginRight={1} fontWeight={"bold"}>$ {Math.round(proyecto.montoSumatoriaDonaciones)}</Typography>
                                            <Typography variant='body1'>recaudados de ${proyecto.monto}</Typography>

                                        </Grid>
                                        <Typography variant='h6' marginRight={1} fontWeight={"bold"}>{porcentajeFinal > 100 ? 100 : porcentajeFinal}%</Typography>

                                    </Grid>
                                    <Typography variant="body2" color="text.secondary" marginTop={2} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                        <AccessTimeIcon />
                                        {calcularDiasFaltantes(proyecto.fechaFinalizacion) > 0 ?
                                            `Quedan ${calcularDiasFaltantes(proyecto.fechaFinalizacion)} dias`
                                            :
                                            "Campaña finalizada"
                                        }
                                    </Typography>
                                </Grid>
                                <Grid sx={{ display: "flex", justifyContent: "center" }} marginTop={5} marginBottom={5}>
                                    {esFechaExpirada(proyecto.fechaFinalizacion) ?
                                        <NextLink href="/donaciones" passHref >
                                            <Button variant="contained" sx={{ backgroundColor: "#4BC6B9", padding: "18px", color: "black" }} >
                                                Donar a la campaña
                                            </Button>
                                        </NextLink>
                                        :

                                        <Typography variant='h6' marginRight={1} fontWeight={"bold"}>Lo sentimos esta campaña ya finalizo</Typography>
                                    }



                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={8}>
                            <BasicTabs>
                                <CustomTabPanel label="Descripcion" index={0} value={0}>
                                    <BloqueProyectoImg segmento={1} imagen={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, 2)} tituloImagen={"Quienes Somos"} descipcion={buscarDescipcionPorTipo(LISTA_DESCRIPCIONES, 1)} />
                                    <BloqueProyectoImg segmento={2} imagen={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, 3)} tituloImagen={"Descripción General"} descipcion={buscarDescipcionPorTipo(LISTA_DESCRIPCIONES, 2)} />
                                    <BloqueProyectoImg segmento={3} imagen={buscarMultimediaPorTipo(LISTA_MULTIMEDIAS, 4)} tituloImagen={"Conclusión"} descipcion={buscarDescipcionPorTipo(LISTA_DESCRIPCIONES, 3)} />
                                </CustomTabPanel>
                                <CustomTabPanel label="Preguntas frecuentes" index={1} value={0}>
                                    <Typography variant='h4'>contenido de preguntas frecuentes</Typography>
                                </CustomTabPanel>
                                <CustomTabPanel label="Comentarios" index={2} value={0}>
                                    <CommentBlock />
                                </CustomTabPanel>
                            </BasicTabs>
                        </Grid>
                        <Grid item xs={4}>
                            <ProyectosSugeridos listaProyectos={proyectos} />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </>

    )
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = parseInt(params?.id as string);
    const data = await getProyecto(id);
    const proyectos = await getProyectos(0, 10);
    return {
        props: {
            proyecto: data,
            proyectos,
        },
        revalidate: 10,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dataprojecto: Proyectos = await getProyectos(0, 100);


    const paths = dataprojecto?.map((proyecto) => {
        return { params: { id: proyecto.id.toString() } };
    });
    return {
        paths,
        fallback: false,
    };
};

export default ProyectoID