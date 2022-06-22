import { Card, CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Beverages() {
    return (

        <Container maxWidth={'lg'} sx={{ marginTop: 5 }}>
            <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Beverages</Typography>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_soft-deinks-beveragesStorefront_m_250522_560x378_01.jpg'
                        alt='Soft Drinks' />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                    <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_juices-beveragesStorefront_m_250522_02.jpg'
                                        alt='juices' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_coconut-water-beveragesStorefront_m_250522_03.jpg'
                                        alt='coconut water' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_energy-drinks-beveragesStorefront_m_250522_04.jpg'
                                        alt='Energy Drink' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/57f3336c-a22d-477f-bc3c-a12116682713/hp_syrups-beveragesStorefront_m_250522_05.jpg'
                                        alt='Syrups' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Beverages