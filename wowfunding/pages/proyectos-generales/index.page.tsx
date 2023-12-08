import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import BodySingle from 'components/layouts/body/single/body-single'
import CardsLanding from 'components/layouts/cards-donaciones-recomendadas/cards-donaciones-recomendadas'
import LayoutGeneral from 'components/layouts/layout-general'
import BasicSelect from 'components/layouts/ui/basic-select'
import LandingTitles from 'components/layouts/ui/landing-titles'
import { ProyectoFinal } from 'interfaces/proyect.type'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import { getProyectos } from 'services/proyectos/proyectos.service'



interface Props {
    proyectos: ProyectoFinal[]
    proyectosCargados: boolean
}

const categoriasDemo = [
    "Salud",
    "Economia",
    "Educacion",
    "Medio ambiente"
]

const ProyectosGenerales = ({ proyectos, proyectosCargados }: Props) => {
    const [filtrosBusqueda, setFiltrosBusqueda] = useState({})


    const handleFiltrosBusqueda = (param: string) => {
        setFiltrosBusqueda(
            {
                ...filtrosBusqueda,
                param
            }
        )
    }


    const handleFiltrarProyectos = async () => {
        const response = await getProyectos(0, 100)
    }

    return (<LayoutGeneral>
        <Head>
            <title>Wowfunding</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Grid sx={{ width: "100vw" }}>
            <BodySingle title={""}>
                <LandingTitles smallTitle='Filtra por lo que busques' title={"Explora nuestros proyectos"} color={"black"} />

                <Grid sx={{ width: "100vw", display: "flex" }} gap={3}>
                    <TextField id="outlined-basic" label="Proyectos" variant="outlined" />
                    <BasicSelect valoresParam={categoriasDemo} valoresTexto={"Categorias"} handleFiltro={handleFiltrosBusqueda} />
                    <Button variant='contained' onClick={handleFiltrarProyectos}>Filtrar proyectos</Button>
                </Grid>

                {/* <CardsLanding listaProyectos={proyectos} /> */}
            </BodySingle>

        </Grid>

    </LayoutGeneral>
    )
}

// export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
//     try {
//         const proyectos = await getProyectos(0, 100);

//         res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate');

//         return {
//             props: {
//                 proyectos: proyectos,
//                 proyectosCargados: true
//             },
//         };
//     } catch (error) {
//         console.error('Error al cargar proyectos', error);
//         return {
//             props: {
//                 proyectos: [],
//                 proyectosCargados: false
//             },
//         };
//     }
// };


export default ProyectosGenerales