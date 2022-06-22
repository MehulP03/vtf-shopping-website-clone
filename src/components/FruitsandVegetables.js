import { Card, CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function FruitsandVegetables() {
    return (

        <Container maxWidth={'lg'} sx={{ marginTop: 5 }}>
            <Typography component='div' textAlign={'center'} fontSize={'24px'}>Snacks Store</Typography>
            <hr />
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_orgain-fnv-fnvStorefront_m_250522_560x378_01.jpg'
                        alt='Organic' />
                </Grid>
                <Grid item xs={6}>
                    <Grid container spacing={2}>
                    <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_fruits-fnvStorefront_m_250522_275x184_02.jpg'
                                        alt='Fresh Fruit' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_veggs-fnvStorefront_m_250522_275x184_03.jpg'
                                        alt='Fresh Vegetables' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_cut-fnvStorefront_m_250522_275x184_04.jpg'
                                        alt='cuts & sprouts' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        <Grid item xs={6}>
                            <CardActionArea>
                                <Card>
                                    <img src='https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/c0380be0-1398-4fa9-8772-2d5f5943b7fd/hp_exotic-fnvStorefront_m_250522_275x184_05.jpg'
                                        alt='Exotic Fruits & vegitable' />
                                </Card>
                            </CardActionArea>
                        </Grid>
                        
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default FruitsandVegetables