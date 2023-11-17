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
import { calcularDiasFaltantes } from 'utils/utils';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ProyectosSugeridos from 'components/layouts/proyectos-sugeridos/proyectos-sugeridos';

interface Props {
    proyecto: ProyectoFinal;
}


const ProyectoID = ({ proyecto }: Props) => {

    const router = useRouter();

    if (router.isFallback === true) {
        return <Spinner />;
    }

    return (
        <>
            <GeneralHeader />
            <Container maxWidth="xl"  >
                <Stack direction={"column"} display={'flex'} justifyContent={'center'} spacing={5}>
                    {/* <Typography marginTop={5} variant='h3' fontWeight={"bold"} textAlign={"center"}>{proyecto.nombre}</Typography> */}

                    <Grid container>
                        <Grid item xs={8}>
                            {/* <Image src={buscarMultimediaPorTipo(listaDeMultimedias, 1)}
                                width={950}
                                height={630}
                                alt={proyecto.nombre}
                            /> */}

                        </Grid>
                        {/* <Grid item xs={4}>
                            <Grid sx={{ display: "flex", flexDirection: "column" }} >
                                <Grid >
                                    <Button variant='contained' sx={{ color: "white", marginBottom: "15px" }} color='secondary'>{proyecto.categoriasId.nombre}</Button>
                                    <Typography variant={'h5'} fontWeight={"bold"} >Resumen del proyecto</Typography>
                                    <Typography variant={'body1'} marginTop={2}>{proyecto.resumen}</Typography>
                                    <Grid sx={{ display: "flex" }} gap={2} marginBottom={4} marginTop={4}>

                                        <Avatar src={buscarMultimediaPorTipo(listaDeMultimedias, 1)} alt={proyecto.nombre} />
                                        <Grid>
                                            <Typography variant='body1' fontWeight={900}>{"proyecto.nombreusuario"}</Typography>
                                            <Typography>Contactarse con el creador:<EmailIcon /> </Typography>

                                        </Grid>
                                    </Grid>

                                    <LinearDeterminate amount={5000} finalAmount={proyecto.monto} />
                                    <Grid sx={{ display: "flex", justifyContent: "space-between" }} marginTop={2}>
                                        <Grid sx={{ display: "flex" }}>

                                            <Typography variant='h6' marginRight={1} fontWeight={"bold"}>$ {proyecto.resumen}</Typography>
                                            <Typography variant='body1'>recaudados de ${proyecto.monto}</Typography>

                                        </Grid>
                                        <Typography variant='h6' marginRight={1} fontWeight={"bold"}>{(5000 / proyecto.monto) * 100}%</Typography>

                                    </Grid>
                                    <Typography variant="body2" color="text.secondary" marginTop={2} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                        <AccessTimeIcon />
                                        Quedan {calcularDiasFaltantes(proyecto.fechaFinalizacion)} dias
                                    </Typography>
                                </Grid>
                                <Grid sx={{ display: "flex", justifyContent: "center" }} marginTop={5} marginBottom={5}>
                                    <NextLink href="/donaciones" passHref >
                                        <Button variant="contained" sx={{ backgroundColor: "#4BC6B9", padding: "18px", color: "black" }} >
                                            Donar a la campaña
                                        </Button>
                                    </NextLink>

                                </Grid>
                            </Grid>
                        </Grid> */}
                    </Grid>

                    <Grid container>
                        <Grid item xs={8}>
                            <BasicTabs>
                                <CustomTabPanel label="Descripcion" index={0} value={0}>
                                    {/* <BloqueProyectoImg segmento={1} imagen={buscarMultimediaPorTipo(listaDeMultimedias, 2)} tituloImagen={"Quienes Somos"} descipcion={proyecto.descripcion} />
                                    <BloqueProyectoImg segmento={2} imagen={buscarMultimediaPorTipo(listaDeMultimedias, 3)} tituloImagen={"Descripción General"} descipcion={proyecto.descripcion} />
                                    <BloqueProyectoImg segmento={3} imagen={buscarMultimediaPorTipo(listaDeMultimedias, 4)} tituloImagen={"Conclusión"} descipcion={proyecto.descripcion} /> */}
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
                            <ProyectosSugeridos />
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

    return {
        props: {
            proyecto: data,
        },
        revalidate: 10,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const dataprojecto: Proyectos = await getProyectos(0,100);
    console.log('dataprojecto', dataprojecto.resultados)

    const paths = dataprojecto?.resultados.map((proyecto) => {
        return { params: { id: proyecto.id.toString() }  };
    }) ;
    return {
        paths,
        fallback: true,
    };
};

export default ProyectoID