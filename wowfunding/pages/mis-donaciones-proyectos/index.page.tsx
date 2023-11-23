import { GetServerSideProps, NextApiRequest } from 'next';
import MisDonaciones from "components/layouts/mis-donaciones/mis-donaciones";
import CardsMisProyectos from "components/layouts/cards-mis-proyectos/cards-mis-proyectos";
import CardsDonacionesRecomendadas from "components/layouts/cards-donaciones-recomendadas/cards-donaciones-recomendadas";
import GeneralHeader from "components/layouts/header/general-header.component";
import GeneralFooter from "components/layouts/footer-general/general-footer.component";
import { Donaciones } from 'interfaces/donaciones.type';
import { ProyectoFinal } from 'interfaces/proyect.type';
import { IUser } from 'interfaces/user.type';
import { getProyectos, getProyectosPorUsuario } from 'services/proyectos/proyectos.service';
import { getDonacionesPorUsuario } from 'services/donaciones/donaciones.service';


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

export const getServerSideProps: GetServerSideProps<MisDonacionesProyectosProps> = async (context) => {
  try {

    // const localStorageUser = typeof window !== 'undefined' ? localStorage.getItem('user-info') : null;
    // const usuarioLogueado: IUser = localStorageUser ? JSON.parse(localStorageUser) : null;
    
    //Cookies, usuario id=1
    const cookieUser = context.req.cookies && context.req.cookies["user-info"];
    const usuarioLogueado: IUser = cookieUser ? JSON.parse(cookieUser) : {id:1};


    const donacionesUsuario = await getDonacionesPorUsuario(usuarioLogueado.id);
    const proyectosUsuario = await getProyectosPorUsuario(usuarioLogueado.id);
    const proyectos = await getProyectos();

    return {
      props: {
        listaProyectosUsuario: proyectosUsuario,
        listaProyectos: proyectos,
        listaDonacionesUsuario: donacionesUsuario,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        listaProyectosUsuario: [],
        listaProyectos: [],
        listaDonacionesUsuario: [],
      },
    };
  }
};

export default MisDonacionesProyectos;
