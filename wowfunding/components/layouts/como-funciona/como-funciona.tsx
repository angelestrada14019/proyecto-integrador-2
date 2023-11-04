import { Grid, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const ComoFunciona = () => {
    return (
        <Grid container>
            <Grid item lg={3}>
                <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                    width={1200}
                    height={500}
                    alt={`Imagen`} />
                <Typography>
                    Subís la información de tu idea a wowfunding.Te vamos a guiar paso a paso
                </Typography>
            </Grid>
            <Grid item lg={3}>
                <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                    width={1200}
                    height={500}
                    alt={`Imagen`} />
                <Typography>
                    Te damos el ok y se publicaen la página
                </Typography>
            </Grid>
            <Grid item lg={3}>
                <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                    width={1200}
                    height={500}
                    alt={`Imagen`} />
                <Typography>
                    Compartimos en las redes para que  llegue a las personasque te ayudarán
                </Typography>
            </Grid>
            <Grid item lg={3}>
                <Image src="https://www.bbva.com/wp-content/uploads/2020/07/BBVA-CompraOnline-0107-1920x1180.jpg"
                    width={1200}
                    height={500}
                    alt={`Imagen`} />
                <Typography>
                    Llegás al objetivo y WOW!Celebramos el éxito
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ComoFunciona