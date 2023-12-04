import * as React from 'react';
import {FC} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import NextLink from 'next/link'
import {Link as MUILink} from '@mui/material';
import Image from "next/image";

type Props = {
    variant?: "simple" | "general"
}

const usuarioLogueado = false; // temporal mientras implementamos la conexión al backend
const Header: FC<Props> = ({variant}: Props) => {
    return <Container maxWidth="xl" sx={{ height: "100px", maxWidth:"1490px" }}>
        <Toolbar disableGutters sx={{ paddingX: "40px", background: "#F7F7FF", marginTop:"17px", height:"10px" }} >
            <NextLink href="/" passHref>
                <MUILink variant="body2" sx={{color: 'black', fontSize: 14, fontWeight: 400, marginRight: 5 }}> Explorar proyectos</MUILink>
            </NextLink>
            <NextLink href="/nuevo-proyecto" passHref>
                <MUILink variant="body2" sx={{color: 'black', fontSize: 14, fontWeight: 400, marginRight: 5, 
                background:"#CDCACC", padding: "8px", borderRadius:"20px" }}> Crear un proyecto</MUILink>
            </NextLink>
            <Box sx={{marginLeft: "auto", marginTop: "5px"}}>
                <NextLink href="/" passHref>
                    <Image src="/logo_completo.png" width={"284px"} height={"50%"} alt="Logo" ></Image>
                </NextLink>
            </Box>

            {!usuarioLogueado && <Box sx={{marginLeft: "auto" }}>
                <NextLink href="/registro" passHref>
                    <MUILink variant="body2" sx={{color: 'black', fontSize: 14, fontWeight: 400, marginRight: 5 }}>Registrarse</MUILink>
                </NextLink>
                <NextLink href="/login" passHref>
                    <MUILink variant="body2" sx={{color: 'black', fontSize: 14, fontWeight: 400}}>Iniciar Sesion</MUILink>
                </NextLink>
            </Box>}


            {usuarioLogueado && <Box sx={{marginLeft: "auto", display:"flex", alignItems:"center" }}>
                <NextLink href="/mis-donaciones-proyectos" passHref>
                    <MUILink variant="body2" sx={{color: 'black', fontSize: 14, fontWeight: 400, marginRight: 3 }}>Donaciones y proyectos</MUILink>
                </NextLink>
                <NextLink href="/" passHref >
                    <Image src="/perfil.png"  width={"45px"} height={"45px"} alt="Perfil" ></Image>
                </NextLink>
                <NextLink href="/login" passHref>
                    <MUILink variant="body2" sx={{color: 'black', fontSize: 14, fontWeight: 400, marginLeft:1}}>Nombre</MUILink>
                </NextLink>
            </Box>}
        </Toolbar>
    </Container>
}


const GeneralHeader: FC<Props> = ({variant}: Props) => {
    return variant == 'general' ?
        <AppBar position="static">
            <Header variant={variant}/>
        </AppBar> : <Header variant={variant}/>
        ;
};
GeneralHeader.defaultProps = {
    variant: 'general'
}

export default GeneralHeader;
