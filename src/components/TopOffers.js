import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function TopOffers() {
    const result = [
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_deals-of-the-week-topoffersStorefront_m_480_250522_01.jpg',
          alt: 'mangos'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_big-packs-topoffersStorefront_m_480_250522_02.jpg',
          alt: 'Deos'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_combos-topoffersStorefront_m_480_250522_03.jpg',
          alt: 'summer Special'
        }, {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/e84ed695-8924-4875-a3b9-c17257323ba7/hp_the%20-30cron-topoffersStorefront_m_480_250522_04.jpg',
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
      <Typography component='div' textAlign={'center'} fontSize={'24px'}>Top Offers</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )
}

export default TopOffers