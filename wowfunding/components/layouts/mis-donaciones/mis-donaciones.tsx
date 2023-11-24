import { useState, useEffect } from 'react';
import Typography from "@mui/material/Typography"
import LandingTitles from "../ui/landing-titles";
import { Donaciones } from 'interfaces/donaciones.type';
import { ProyectoFinal } from 'interfaces/proyect.type';

interface Props {
  listaDonaciones: Donaciones[];
  listaProyectos: ProyectoFinal[];
}

const MisDonaciones: React.FC<Props> = ({ listaDonaciones, listaProyectos }) => {
  const [donacionesUsuario, setDonacionesUsuario] = useState<Donaciones[]>([]);
  const [error, setError] = useState<string | null>(null);

  const columnStyles = {
    fecha: {
      flexBasis: '10%',
      textAlign: 'left' as const,
      marginLeft: '15%',
      marginBottom: '15px',
    },
    proyecto: {
      flexBasis: '40%',
      textAlign: 'left' as const,
      marginLeft: '20px',
      marginBottom: '15px',
    },
    recaudado: {
      flexBasis: '25%',
      textAlign: 'left' as const,
      marginLeft: '20px',
      marginBottom: '15px',
    },
    contribucion: {
      flexBasis: '25%',
      textAlign: 'left' as const,
      marginLeft: '20px',
      marginBottom: '15px',
    },
  };

  const coloredTextStyle = {
    color: '#0B3954',
  };


  const getNombreProyecto = (idProyecto: number) => {
    const proyecto = listaProyectos.find((p) => p.id === idProyecto);
    return proyecto ? proyecto.nombre : 'Proyecto no encontrado';
  };


  const getRecaudadoHastaFecha = (idProyecto: number) => {
    const proyecto = listaProyectos.find((p) => p.id === idProyecto);
    return proyecto ? proyecto.montoSumatoriaDonaciones : 0;
  };

  useEffect(() => {

    setDonacionesUsuario(listaDonaciones);
  }, [listaDonaciones]);

  return (
    <div style={{ marginTop: '20px', marginBottom: '40px' }}>
      <LandingTitles smallTitle='Un resumen de tu ayuda' title='Mis donaciones' color="black"/>

      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ ...columnStyles.fecha }}>
          <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
            <strong>Fecha</strong>
          </Typography>
          {donacionesUsuario.map((donacion) => (
            <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
              {donacion.fechaDonacion}
            </Typography>
          ))}
        </div>

        <div style={{ ...columnStyles.proyecto }}>
          <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
            <strong>Proyecto</strong>
          </Typography>
          {donacionesUsuario.map((donacion) => (
            <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
              {getNombreProyecto(donacion.idProductos)}
            </Typography>
          ))}
        </div>

        <div style={{ ...columnStyles.recaudado }}>
          <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
            <strong>Recaudado hasta la fecha</strong>
          </Typography>
          {donacionesUsuario.map((donacion) => (
            <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
              $ {getRecaudadoHastaFecha(donacion.idProductos)}
            </Typography>
          ))}
        </div>

        <div style={{ ...columnStyles.contribucion }}>
          <Typography variant="subtitle1" align="left" noWrap style={coloredTextStyle}>
            <strong>Mi contribución</strong>
          </Typography>
          {donacionesUsuario.map((donacion) => (
            <Typography key={donacion.id} align="left" noWrap style={{ ...coloredTextStyle, marginBottom: '15px' }}>
              $ {donacion.cantidad}
            </Typography>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MisDonaciones;
