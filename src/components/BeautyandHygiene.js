import { Card, CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function BeautyandHygiene() {
    return (

        <Container maxWidth={'lg'} sx={{ marginTop: 5 }}>
            <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Beauty and Hygiene</Typography>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_lips-beautyStorefront_m_250522_560x378_01.jpg'
                       alt='Lips' />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                    <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_deos-beautyStorefront_m_250522_275x184_02.jpg'
                                    alt='Deos' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_serum-beautyStorefront_m_250522_275x184_03.jpg'
                                     alt='Serums' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_bb,cc,creams-beautyStorefront_m_250522_275x184_04.jpg'
                                        alt='BB CC Creams' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/58403075-40b0-4b2f-a411-9a66f04d2164/hp_eye-makeup-beautyStorefront_m_250522_275x184_05.jpg'
                                        alt='Eye Makeup' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BeautyandHygiene