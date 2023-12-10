import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import BodySingle from 'components/layouts/body/single/body-single'
import CardsLanding from 'components/layouts/cards-donaciones-recomendadas/cards-donaciones-recomendadas'
import LayoutGeneral from 'components/layouts/layout-general'
import BasicSelect from 'components/layouts/ui/basic-select'
import LandingTitles from 'components/layouts/ui/landing-titles'
import { ProyectoFinal } from 'interfaces/proyect.type'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import { getProyectos, getProyectosLocal } from 'services/proyectos/proyectos.service'



interface Props {
    proyectos: ProyectoFinal[]
    proyectosCargados: boolean
}



const ProyectosGenerales = ({ proyectos, proyectosCargados }: Props) => {
    const [proyectoFiltrados, setProyectoFiltrados] = useState(proyectos);

    const [filtrosBusqueda, setFiltrosBusqueda] = useState({});
    const [selectCategorias, setSelectCategorias] = useState("");
    const [proyectoRespone, setProyectoRespone] = useState(proyectos);

    const handleCategorias = (param: string) => {
        console.log('param', param);
        setSelectCategorias(param);
    };

    const handleFiltrosBusqueda = (param: string) => {
        setFiltrosBusqueda({ ...filtrosBusqueda, param });
    };

    const handleFiltrarProyectos = async () => {
        try {
            let response;

            if (selectCategorias) {
                response = await getProyectosLocal(0, 100, selectCategorias);
            } else {
                response = await getProyectosLocal(0, 100);
            }

            setProyectoRespone(response.data);
            setProyectoFiltrados(response.data);

            console.log('Proyectos filtrados actualizados:', response);

            return response;
        } catch (error) {
            console.error('Error al filtrar proyectos', error);
            return [];
        }
    };


    useEffect(() => {
        // Aquí puedes realizar otras operaciones después de que la lista de proyectos filtrados se actualiza
        console.log('Proyectos filtrados actualizados:', proyectoFiltrados);
    }, [proyectoFiltrados]);


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
                    <BasicSelect valoresTexto={"Categorias"} handleFiltro={handleCategorias} />
                    <Button variant='contained' onClick={handleFiltrarProyectos}>Filtrar proyectos</Button>
                </Grid>
                {proyectoFiltrados && proyectoFiltrados.length > 0 ? (
                    <CardsLanding listaProyectos={proyectoFiltrados} />
                ) : (
                    <p>No se encontraron proyectos con esa categoria</p>
                )}
                
            </BodySingle>

        </Grid>

    </LayoutGeneral>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
    try {
        const proyectos = await getProyectos(0, 100);

        res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate');

        return {
            props: {
                proyectos: proyectos,
                proyectosCargados: true
            },
        };
    } catch (error) {
        console.error('Error al cargar proyectos', error);
        return {
            props: {
                proyectos: [],
                proyectosCargados: false
            },
        };
    }
};


export default ProyectosGenerales