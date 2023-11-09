import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import LandingTitles from '../ui/landing-titles'

const ComoFunciona = () => {
    return (
        <>
            <Grid sx={{ backgroundColor: "#0B3954", color: "white", padding: "15px",  marginTop: "30px"}}>

                <LandingTitles smallTitle={"Explorando el Proceso "} title='¿Cómo funciona wowfunding?' color='white' />
            </Grid>

            <Grid container justifyContent={"space-around"} marginTop={5} >
                <Grid item lg={2}>
                    <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                        width={1200}
                        height={500}
                        alt={`Imagen`} />
                    <Typography variant='body1' align='center'>
                        Subís la información de tu idea a wowfunding.Te vamos a guiar paso a paso
                    </Typography>
                </Grid>
                <Grid item lg={2}>
                    <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                        width={1200}
                        height={500}
                        alt={`Imagen`} />
                    <Typography variant='body1' align='center'>
                        Publicás tu proyecto para que todo el mundo lo vea
                    </Typography>
                </Grid>
                <Grid item lg={2}>
                    <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                        width={1200}
                        height={500}
                        alt={`Imagen`} />
                    <Typography variant='body1' align='center'>
                        Compartimos en las redes para que  llegue a las personasque te ayudarán
                    </Typography>
                </Grid>
                <Grid item lg={2}>
                    <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                        width={1200}
                        height={500}
                        alt={`Imagen`} />
                    <Typography variant='body1' align='center'>
                        Llegás al objetivo y WOW!Celebramos el éxito
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default ComoFunciona