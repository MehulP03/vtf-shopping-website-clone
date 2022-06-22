import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'
const result = [
    {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_namkeens-snacksStorefront_m_480_250522_01.jpg',
      alt: 'Chips'
    },
    {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_frozen-snacksStorefront_m_480_250522_02.jpg',
      alt: 'Froozen Snacks'
    },
    {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_soups-snacksStorefront_m_480_250522_03.jpg',
      alt: 'Soups, Noodles & pasta'
    }, {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/bec9d825-ce2e-467d-a79e-9174f6257932/hp_biscuits-snacksStorefront_m_480_250522_04.jpg',
      alt: 'Biscuits & Cookies'
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


function SnacksStore() {
  return (
    <Container maxWidth={'lg'} sx={{marginTop: 5}}>
      <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Snacks Store</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )
}

export default SnacksStore