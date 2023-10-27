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

const Header: FC<Props> = ({variant}: Props) => {
    return <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ paddingX: "40px" }}>
            <NextLink href="/" passHref>
                <MUILink variant="body2" sx={{color: 'white', fontSize: 16, fontWeight: 600, marginRight: 5 }}> Explorar proyectos</MUILink>
            </NextLink>
            <NextLink href="/" passHref>
                <MUILink variant="body2" sx={{color: 'white', fontSize: 16, fontWeight: 600, marginRight: 5 }}> Cómo funciona</MUILink>
            </NextLink>
            <Box sx={{marginLeft: "auto", marginTop: "5px"}}>
                <NextLink href="/" passHref>
                    <Image src="/logo.png" width={"120px"} height={"65%"} alt="Logo" ></Image>
                </NextLink>
            </Box>
            <Box sx={{marginLeft: "auto" }}>
                <NextLink href="/" passHref>
                    <MUILink variant="body2" sx={{color: 'white', fontSize: 16, fontWeight: 600, marginRight: 5 }}>Crear un proyecto</MUILink>
                </NextLink>
                <NextLink href="/" passHref>
                    <MUILink variant="body2" sx={{color: 'white', fontSize: 16, fontWeight: 600}}>Iniciar Sesion</MUILink>
                </NextLink>
            </Box>
            
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
