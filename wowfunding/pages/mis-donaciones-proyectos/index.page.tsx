import { GetServerSideProps, NextApiRequest } from 'next';
import MisDonaciones from "components/layouts/mis-donaciones/mis-donaciones";
import CardsMisProyectos from "components/layouts/cards-mis-proyectos/cards-mis-proyectos";
import CardsDonacionesRecomendadas from "components/layouts/cards-donaciones-recomendadas/cards-donaciones-recomendadas";
import GeneralHeader from "components/layouts/header/general-header.component";
import GeneralFooter from "components/layouts/footer-general/general-footer.component";
import { Donaciones } from 'interfaces/donaciones.type';
import { ProyectoFinal } from 'interfaces/proyect.type';
import { API_URL } from 'utils/servicesUtils';



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

// export const getServerSideProps: GetServerSideProps<MisDonacionesProyectosProps> = async (context) => {
//   try {

// const localStorageUser = typeof window !== 'undefined' ? localStorage.getItem('user-info') : null;
// const usuarioLogueado: IUser = localStorageUser ? JSON.parse(localStorageUser) : null;

//Cookies, usuario id=1
// const cookieUser = context.req.cookies && context.req.cookies["user-info"];
// const usuarioLogueado: IUser = cookieUser ? JSON.parse(cookieUser) : {id:1};
//     const usuarioLogueado = {id:1};


//     const donacionesUsuario = await getDonacionesPorUsuario(usuarioLogueado.id);
//     console.log(donacionesUsuario)

//     const proyectosUsuario = await getProyectosPorUsuario(usuarioLogueado.id);
//     const proyectos = await getProyectos();

//     return {
//       props: {
//         listaProyectosUsuario: proyectosUsuario,
//         listaProyectos: proyectos,
//         listaDonacionesUsuario: donacionesUsuario,
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return {
//       props: {
//         listaProyectosUsuario: [],
//         listaProyectos: [],
//         listaDonacionesUsuario: [],
//       },
//     };
//   }
// };

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const usuarioId = 18;
    const API_URL_local = "http://localhost:8080"

    const donacionesResponse = await fetch(`${API_URL_local}/api-donaciones/donacion/usuario/${usuarioId}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZ3VzZGFtZWxpb0BkaC5jb20iLCJpYXQiOjE3MDEzOTAyMTUsImV4cCI6MTcwMTM5MjAxNX0.QurBFPhXXKQhoEr5LkLRxUMtFhzi3Xtz2zkjij4wXqQ'
      },

      method: "GET"
    });

    // if (!donacionesResponse.ok) {
    //   throw new Error(`Error al obtener las donaciones del usuario ${usuarioId}`);
    // }

    const donacionesUsuario = await donacionesResponse.json();

    const proyectosResponse = await fetch(`${API_URL_local}/api-productos/productos/getProducto?pageNumber=0&pageSize=12`);

    if (!proyectosResponse.ok) {
      throw new Error('Error al obtener los proyectos');
    }

    const proyectos = await proyectosResponse.json();

    const proyectosUsuarioResponse = await fetch(
      `${API_URL_local}/api-productos/productos/getProducto?pageNumber=0&pageSize=12&usuariosId=${usuarioId}`
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