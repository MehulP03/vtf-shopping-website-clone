import { Card, CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function BestSellers() {
  return (
    <Container maxWidth={'lg'} sx={{ marginTop: 5 }}>
        <Typography component='div' textAlign={'center'} fontSize={'24px'}>Best Sellers </Typography>
            <hr />
            <Grid container spacing={2}>
                <Grid item sx={2}>
                    <CardActionArea>
                        <Card>
                            

                        </Card>
                    </CardActionArea>
                </Grid>
                
            </Grid>
        </Container>
  )
}

export default BestSellers