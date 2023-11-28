import { GetServerSideProps, NextApiRequest } from 'next';
import MisDonaciones from "components/layouts/mis-donaciones/mis-donaciones";
import CardsMisProyectos from "components/layouts/cards-mis-proyectos/cards-mis-proyectos";
import CardsDonacionesRecomendadas from "components/layouts/cards-donaciones-recomendadas/cards-donaciones-recomendadas";
import GeneralHeader from "components/layouts/header/general-header.component";
import GeneralFooter from "components/layouts/footer-general/general-footer.component";
import { Donaciones } from 'interfaces/donaciones.type';
import { ProyectoFinal } from 'interfaces/proyect.type';

interface MisDonacionesProyectosProps {
  listaDonacionesUsuario: Donaciones[];
  listaProyectos: ProyectoFinal[];
  listaProyectosUsuario: ProyectoFinal[];
}

const MisDonacionesProyectos: React.FC<MisDonacionesProyectosProps> = ({ listaDonacionesUsuario, listaProyectos, listaProyectosUsuario }) => {
  return (
    <>
      <GeneralHeader />
      <MisDonaciones listaDonaciones={listaDonacionesUsuario} listaProyectos={listaProyectos} />
      <CardsMisProyectos listaProyectosUsuario={listaProyectosUsuario} />
      <CardsDonacionesRecomendadas listaProyectos={listaProyectos} />
      <GeneralFooter />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const API_URL = 'http://44.202.51.198:8080';
    const usuarioId = 18;
    const donacionesResponse = await fetch(`${API_URL}/api-donaciones/donacion/usuario/${usuarioId}`);

    if (!donacionesResponse.ok) {
      throw new Error(`Error al obtener las donaciones del usuario ${usuarioId}`);
    }

    const donacionesUsuario = await donacionesResponse.json();

    const proyectosResponse = await fetch(`${API_URL}/api-productos/productos?pageNumber=0&pageSize=12`);

    if (!proyectosResponse.ok) {
      throw new Error('Error al obtener los proyectos');
    }

    const proyectos = await proyectosResponse.json();

    const proyectosUsuarioResponse = await fetch(
      `${API_URL}/api-productos/productos?pageNumber=0&pageSize=12&usuariosId=${usuarioId}`
    );

    
    if (!proyectosUsuarioResponse.ok) {
      throw new Error('Error al obtener proyectos del usuario');
    }

    const proyectosUsuario = await proyectosUsuarioResponse.json();

    return {
      props: {
        listaDonacionesUsuario: donacionesUsuario,
        listaProyectos: proyectos,
        listaProyectosUsuario: proyectosUsuario,
      },
    };
  } catch (error) {
    console.error('Error al obtener donaciones:', error);

    return {
      props: {
        donaciones: [],
        listaProyectos: [],
        listaProyectosUsuario: [],
      },
    };
  }
};

export default MisDonacionesProyectos;

