import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Newsletter = () => {
    return (
        <Grid container lg={8} sx={{backgroundColor: "gray"}}>
            <Typography variant='h4'>Unite a la comunidad de wowfounders</Typography>
            <Grid>
                <TextField placeholder='introduci tu email' />
                <Button variant='outlined' color='primary'>Suscribite</Button>
            </Grid>
        </Grid>
    )
}

export default Newsletter