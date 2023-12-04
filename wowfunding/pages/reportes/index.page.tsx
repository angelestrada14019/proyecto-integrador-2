import LayoutGeneral from 'components/layouts/layout-general'
import ReporteLanging from 'components/layouts/reporte-landing/reporte-landing'
import ReportesAdmin from 'components/layouts/reportes-admin/reportes-admin'
import React from 'react'
import * as XLSX from 'xlsx';
import { DataGrid, GridColDef, esES } from '@mui/x-data-grid';
import { Button, Grid, ThemeProvider, createTheme } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import LandingTitles from 'components/layouts/ui/landing-titles';

import type { GetServerSideProps, NextPage } from 'next'
import { getProyectos } from 'services/proyectos/proyectos.service';
import { ProyectoFinal, Proyectos } from 'interfaces/proyect.type';
import { Spinner } from 'components/layouts/ui/spinner';




interface Props {
  proyectos: ProyectoFinal[]
  proyectosCargados: boolean
}




const theme = createTheme({
  typography: {
    fontFamily: [
      'sans-serif',
      'Roboto',
    ].join(','),
  },
});

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'titulo',
    headerName: 'Titulo',
    type: "string",
    width: 250,
    editable: true,
  },
  {
    field: 'resumen',
    headerName: 'resumen',
    type: "string",
    width: 250,
    editable: true,
  },
  {
    field: 'montoRecaudado',
    headerName: 'Monto Recaudado',
    type: 'number',
    width: 215,
    editable: true,
  },
  {
    field: 'monto',
    headerName: 'Monto objetivo',
    type: 'number',
    width: 150,
    editable: true,
  },
  {
    field: 'fechaFinal',
    headerName: 'Fecha finalizacion',
    width: 160,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    titulo: 'Educación para Todos',
    resumen: 'Proporciona acceso a la educación en áreas desfavorecidas.',
    monto: 15000,
    montoRecaudado: 7500,
    fechaFinal: '2023-12-31',
  },
  {
    id: 2,
    titulo: 'Salud Mental en la Juventud',
    resumen: 'Campaña para concienciar y brindar apoyo a la salud mental entre los jóvenes.',
    monto: 12000,
    montoRecaudado: 6000,
    fechaFinal: '2023-11-30',
  },
  {
    id: 3,
    titulo: 'Protección del Medio Ambiente Marino',
    resumen: 'Preserva nuestros océanos y la vida marina a través de iniciativas sostenibles.',
    monto: 20000,
    montoRecaudado: 8500,
    fechaFinal: '2023-10-31',
  },
  {
    id: 4,
    titulo: 'Refugio para Personas Sin Hogar',
    resumen: 'Construcción de refugios y servicios para personas sin hogar en invierno.',
    monto: 18000,
    montoRecaudado: 9000,
    fechaFinal: '2023-09-30',
  },
  {
    id: 5,
    titulo: 'Innovación en Energías Renovables',
    resumen: 'Fomenta la investigación y desarrollo de tecnologías de energía limpia.',
    monto: 25000,
    montoRecaudado: 12000,
    fechaFinal: '2023-08-31',
  },
  {
    id: 6,
    titulo: 'Alimentos para Comunidades Vulnerables',
    resumen: 'Distribución de alimentos a comunidades afectadas por la crisis económica.',
    monto: 10000,
    montoRecaudado: 5000,
    fechaFinal: '2023-07-31',
  },
  {
    id: 7,
    titulo: 'Acceso a Agua Potable',
    resumen: 'Proyecto para proporcionar acceso sostenible a agua potable en áreas remotas.',
    monto: 16000,
    montoRecaudado: 8000,
    fechaFinal: '2023-06-30',
  },
  {
    id: 8,
    titulo: 'Arte para la Comunidad',
    resumen: 'Apoyo a proyectos artísticos locales para enriquecer la comunidad.',
    monto: 12000,
    montoRecaudado: 6000,
    fechaFinal: '2023-05-31',
  },
  {
    id: 9,
    titulo: 'Desarrollo Tecnológico en Educación',
    resumen: 'Integración de tecnología en aulas para mejorar la calidad educativa.',
    monto: 18000,
    montoRecaudado: 9000,
    fechaFinal: '2023-04-30',
  },
  {
    id: 10,
    titulo: 'Proyecto de Agricultura Sostenible',
    resumen: 'Promoción de prácticas agrícolas sostenibles para comunidades rurales.',
    monto: 22000,
    montoRecaudado: 11000,
    fechaFinal: '2023-03-31',
  },
  {
    id: 11,
    titulo: 'Empoderamiento de Mujeres',
    resumen: 'Iniciativas para empoderar a mujeres y promover la igualdad de género.',
    monto: 17000,
    montoRecaudado: 8500,
    fechaFinal: '2023-02-28',
  },
  {
    id: 12,
    titulo: 'Renovación de Espacios Públicos',
    resumen: 'Proyecto para renovar parques y espacios públicos en zonas urbanas.',
    monto: 15000,
    montoRecaudado: 7500,
    fechaFinal: '2023-01-31',
  },
  {
    id: 13,
    titulo: 'Campaña de Prevención de Enfermedades',
    resumen: 'Promoción de la salud y prevención de enfermedades en comunidades.',
    monto: 20000,
    montoRecaudado: 10000,
    fechaFinal: '2022-12-31',
  },
  {
    id: 14,
    titulo: 'Apoyo a Pequeños Agricultores',
    resumen: 'Apoyo financiero y técnico para pequeños agricultores locales.',
    monto: 13000,
    montoRecaudado: 6500,
    fechaFinal: '2022-11-30',
  },
  {
    id: 15,
    titulo: 'Protección de Bosques Nativos',
    resumen: 'Preservación de bosques nativos y biodiversidad en peligro.',
    monto: 18000,
    montoRecaudado: 9000,
    fechaFinal: '2022-10-31',
  },
  {
    id: 16,
    titulo: 'Apoyo a la Investigación del Cáncer',
    resumen: 'Investigación y desarrollo de tratamientos innovadores contra el cáncer.',
    monto: 25000,
    montoRecaudado: 12000,
    fechaFinal: '2022-09-30',
  },
  {
    id: 17,
    titulo: 'Proyecto de Energía Solar',
    resumen: 'Implementación de sistemas de energía solar en comunidades remotas.',
    monto: 21000,
    montoRecaudado: 10500,
    fechaFinal: '2022-08-31',
  },
  {
    id: 18,
    titulo: 'Inclusión Digital en Educación',
    resumen: 'Promoción de la inclusión digital en entornos educativos.',
    monto: 16000,
    montoRecaudado: 8000,
    fechaFinal: '2022-07-31',
  },
  {
    id: 19,
    titulo: 'Proyecto de Arte Urbano',
    resumen: 'Embellecimiento de áreas urbanas a través de proyectos de arte público.',
    monto: 14000,
    montoRecaudado: 7000,
    fechaFinal: '2022-06-30',
  },
  {
    id: 20,
    titulo: 'Asistencia Médica en Zonas Rurales',
    resumen: 'Brinda servicios médicos a comunidades remotas sin acceso a atención médica.',
    monto: 19000,
    montoRecaudado: 9500,
    fechaFinal: '2022-05-31',
  },
];
const Reportes: NextPage<Props> = ({ proyectos, proyectosCargados }: Props) => {
  console.log('proyectos', proyectos[0])


  if (!proyectosCargados) {
    return (
      <LayoutGeneral>
        <ThemeProvider theme={theme}>
          <Grid sx={{ width: '100vw', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Spinner />
          </Grid>
        </ThemeProvider>
      </LayoutGeneral>
    );
  }


  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(rows);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Proyectos');
    XLSX.writeFile(workbook, 'reportes.xlsx');
  };

  return (
    <LayoutGeneral>
      <ThemeProvider theme={theme}>
        <Grid sx={{ width: "75vw", display: "flex", flexDirection: "column" }} gap={3}>
          <ReporteLanging />
          <LandingTitles smallTitle="Conoce los avances de los proyectos" title="Reportes" color="black" />
          <Grid>
            <Button onClick={exportToExcel} style={{ width: "250px" }} color='primary' variant='contained'><DownloadIcon style={{ marginRight: "5px" }} />Descargar Excel</Button>
          </Grid>
          <ReportesAdmin rows={rows} columns={columns} />
        </Grid>
      </ThemeProvider>
    </LayoutGeneral>)
}


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  try {
    const proyectos = await getProyectos(0, 20);

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


export default Reportes
