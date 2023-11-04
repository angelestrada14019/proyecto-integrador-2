import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const FooterAccesos = () => {
    return (
        <Container>
		<Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography variant="h6" component="h6">Ayuda</Typography>
          </Box>
		      <Box>
            <a href="/centro-de-ayuda">Centro de ayuda</a>
          </Box>
          <Box>
            <a href="/preguntas-frecuentes">Preguntas frecuentes</a>
          </Box>
          <Box>
            <a href="/declaracion-de-privacidad">Declaración de privacidad</a>
          </Box>
          <Box>
            <a href="/informacion-legal">Información legal</a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography variant="h6" component="h6">Funcionamiento</Typography>
          </Box>
		      <Box>
            <a href="/como-funciona">Cómo funciona</a>
          </Box>
          <Box>
            <a href="/ideas">Ideas para recaudar fondos</a>
          </Box>
          <Box>
            <a href="/proyectos-admitidos">Proyectos admitidos</a>
          </Box>
          <Box>
            <a href="/paises">Paises a los que llegamos</a>
          </Box>
		  <Box>
            <a href="/alianzas">Alianzas estratégicas</a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography variant="h6" component="h6">Acerca de WowFunding</Typography>
          </Box>
		  <Box>
            <a href="/quienes-somos">Quienes somos</a>
          </Box>
          <Box>
            <a href="/prensa">Prensa</a>
          </Box>
          <Box>
            <a href="/historias-de-exito">Historias de éxito</a>
          </Box>
        </Grid>
      </Grid>
		</Container>
    )
}
export default FooterAccesos