
import CardsDonacionesRecomendadas from "components/layouts/cards-donaciones-recomendadas/cards-donaciones-recomendadas";
import CardsMisProyectos from "components/layouts/cards-mis-proyectos/cards-mis-proyectos";
import MisDonaciones from "components/layouts/mis-donaciones/mis-donaciones";
import Grid from "@mui/material/Grid";
import GeneralHeader from "components/layouts/header/general-header.component";
import GeneralFooter from "components/layouts/footer-general/general-footer.component";

const MisDonacionesProyectos = () => {
    return(
        <>
        <GeneralHeader/>
        <MisDonaciones />
        <CardsMisProyectos />
        <CardsDonacionesRecomendadas />
        <GeneralFooter/>
        </>

    );
}

export default MisDonacionesProyectos