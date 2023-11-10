import { Avatar, Button, Card, Container, Grid, Stack, Typography } from '@mui/material';
import BloqueProyectoImg from 'components/layouts/ui/bloque-imagen-proyecto';
import LinearDeterminate from 'components/layouts/ui/linear-determinate';
import { Spinner } from 'components/layouts/ui/spinner';
import BasicTabs, { CustomTabPanel } from 'components/layouts/ui/tabs';
import { Proyecto, Proyectos } from 'interfaces/proyect.type'
import { GetStaticPaths, GetStaticProps } from 'next';
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
    proyecto: Proyecto;
}


const ProyectoID = () => {
    // const ProyectoID = ({ proyecto }: Props) => {
    // const router = useRouter();

    // if (router.isFallback === true) {
    //     return <Spinner />;
    // }

    const proyecto = {
        proyectoResumido: {
            id: 1,
            titulo: 'Proyecto de Demostración',
            imagenPortada: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
            descripcionCorta: 'Ten en cuenta que la elección de la imagen de fondo debe ser coherente con la identidad y el mensaje de tu plataforma de crowdfunding. Debes seleccionar una imagen que transmita la idea de colaboración, apoyo y la realización de proyectos. Además, la imagen debe ser visualmente atractiva y de alta calidad. Puedes buscar imágenes de stock en sitios web de fotografías o considerar la posibilidad de trabajar con un fotógrafo para obtener una imagen personalizada que se adapte a tus necesidades.',
            montoRecaudado: 5000,
            montoARecaudar: 10000,
            fechaInicio: '1/12/2023',
            fechaLimite: '01/12/2023',
        },
        nombreCreador: 'John Doe',
        contacto: 'john.doe@example.com',
        categoria: 'Salud',
        quienesSomos: 'En el proyecto de salud "Vida Sana para Todos", nuestro enfoque principal es mejorar la calidad de vida de las comunidades locales. Nos esforzamos por promover prácticas de vida saludable y ofrecer acceso a atención médica de calidad. Nuestro equipo de profesionales de la salud trabaja incansablemente para concienciar sobre la importancia de una dieta equilibrada, el ejercicio regular y la prevención de enfermedades. Además, colaboramos estrechamente con hospitales y clínicas locales para proporcionar servicios médicos esenciales a aquellos que lo necesitan. Creemos que la salud es un derecho fundamental, y estamos comprometidos a hacerlo accesible para todos.',
        quienesSomosImg: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
        descipcionGeneral: 'En "Vida Sana para Todos", estamos enfocados en abordar problemas de salud específicos, como la malnutrición infantil y la prevención de enfermedades transmitidas por vectores. Trabajamos en estrecha colaboración con las escuelas locales para implementar programas de educación nutricional y proporcionamos suplementos vitamínicos a niños en riesgo. También organizamos campañas de control de vectores para prevenir enfermedades como el dengue y el zika. Nuestra misión es empoderar a las comunidades locales con el conocimiento y las herramientas necesarias para cuidar de su salud y bienestar.',
        descipcionGeneralImg: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
        conclusion: 'La sostenibilidad es un componente clave de nuestro proyecto de salud. Nos esforzamos por capacitar a las comunidades para que sean autosuficientes en la gestión de su salud. Promovemos la siembra de huertos comunitarios y brindamos capacitación en prácticas agrícolas sostenibles para mejorar la disponibilidad de alimentos frescos y saludables. Además, trabajamos en la construcción de instalaciones de atención médica locales y capacitamos a personal de salud local para que puedan continuar brindando atención de calidad. En "Vida Sana para Todos", creemos en un enfoque integral para la salud que se centra en las personas y su capacidad para cuidar de sí mismas y sus comunidades.',
        conclusionImg: 'https://www.paho.org/sites/default/files/2023-04/who-75-whd-2023-web-banner-es.jpg',
    }
    return (
        <>
            <GeneralHeader />
            <Container maxWidth="xl"  >
                <Stack direction={"column"} display={'flex'} justifyContent={'center'} spacing={5}>
                    <Typography marginTop={5} variant='h3' fontWeight={"bold"} textAlign={"center"}>{proyecto.proyectoResumido.titulo}</Typography>

                    <Grid container>
                        <Grid item xs={8}>
                            <Image src={proyecto.proyectoResumido.imagenPortada}
                                width={950}
                                height={630}
                                alt={proyecto.proyectoResumido.titulo}
                            />

                        </Grid>
                        <Grid item xs={4}>
                            <Grid sx={{ display: "flex", flexDirection: "column" }} >
                                <Grid >
                                    <Button variant='contained' sx={{ color: "white", marginBottom: "15px" }} color='secondary'>{proyecto.categoria}</Button>
                                    <Typography variant={'h5'} fontWeight={"bold"} >Resumen del proyecto</Typography>
                                    <Typography variant={'body1'} marginTop={2}>{proyecto.proyectoResumido.descripcionCorta}</Typography>
                                    <Grid sx={{ display: "flex" }} gap={2} marginBottom={4} marginTop={4}>

                                        <Avatar src={proyecto.proyectoResumido.imagenPortada} alt={proyecto.nombreCreador} />
                                        <Grid>
                                            <Typography variant='body1' fontWeight={900}>{proyecto.nombreCreador}</Typography>
                                            <Typography>Contactarse con el creador:<EmailIcon /> </Typography>

                                        </Grid>
                                    </Grid>

                                    <LinearDeterminate amount={proyecto.proyectoResumido.montoRecaudado} finalAmount={proyecto.proyectoResumido.montoARecaudar} />
                                    <Grid sx={{ display: "flex", justifyContent: "space-between" }} marginTop={2}>
                                        <Grid sx={{ display: "flex" }}>

                                            <Typography variant='h6' marginRight={1} fontWeight={"bold"}>$ {proyecto.proyectoResumido.montoRecaudado}</Typography>
                                            <Typography variant='body1'>recaudados de ${proyecto.proyectoResumido.montoARecaudar}</Typography>

                                        </Grid>
                                        <Typography variant='h6' marginRight={1} fontWeight={"bold"}>{(proyecto.proyectoResumido.montoRecaudado / proyecto.proyectoResumido.montoARecaudar) * 100}%</Typography>

                                    </Grid>
                                    <Typography variant="body2" color="text.secondary" marginTop={2} sx={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                                        <AccessTimeIcon />
                                        Quedan {calcularDiasFaltantes(proyecto.proyectoResumido.fechaLimite)} dias
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
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item xs={8}>
                            <BasicTabs>
                                <CustomTabPanel label="Descripcion" index={0} value={0}>
                                    <BloqueProyectoImg segmento={1} imagen={proyecto.quienesSomosImg} tituloImagen={"Quienes Somos"} descipcion={proyecto.quienesSomos} />
                                    <BloqueProyectoImg segmento={2} imagen={proyecto.descipcionGeneralImg} tituloImagen={"Descripción General"} descipcion={proyecto.descipcionGeneral} />
                                    <BloqueProyectoImg segmento={3} imagen={proyecto.conclusionImg} tituloImagen={"Conclusión"} descipcion={proyecto.conclusion} />
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

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const id = parseInt(params?.id as string);
//     const data = await getProyecto(id);

//     return {
//       props: {
//         comic: data,
//       },
//       revalidate: 10,
//     };
//   };

// export const getStaticPaths: GetStaticPaths =async () => {
//     const data: Proyectos = await getProyectos();
//     const paths = data.resultados.map((proyecto) =>{
//         return { params: {id: proyecto.proyectoResumido.id.toString()}}
//     });

//     return {
//         paths,
//         fallback: true,
//     }
// }

export default ProyectoID