import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'

import React from 'react'

function MostPopular() {

    const result = [
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_mangos-mostpopularStorefront_m_480_250522_01.jpg',
          alt: 'mangos'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_deos-mostpopularStorefront_m_480_250522_02.jpg',
          alt: 'Deos'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_sunmer-specil-mostpopularStorefront_m_480_250522_03.jpg',
          alt: 'summer Special'
        }, {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/d08e0229-4112-4bb5-bf2f-bada7ad87f4d/hp_ayurveda-store-mostpopularStorefront_m_480_250522_04.jpg',
          alt: 'ayurveda-store'
        }
      ];
    
    const cards = result.map((el) => {
        return (<Grid item xs={3}>
          <CardActionArea>
          <Card >
            <img src={el.url}
              alt={el.alt} height={205} width={273} />
          </Card>
          </CardActionArea>
        </Grid>);
      });
    
    return (
    <Container maxWidth={'lg'} sx={{marginTop: 5}}>
      <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Most Popular</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )
}

export default MostPopular