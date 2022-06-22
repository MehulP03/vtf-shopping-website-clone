import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'

import React from 'react'

function Cleaning() {

    const result = [
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_cleaner-disinfectants-cleaningStorefront_m_480_250522_01.jpg',
          alt: 'cleaners'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_detegents-cleaningStorefront_m_480_250522_02.jpg',
          alt: 'Detergents'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_kitchen-wips-cleaningStorefront_m_480_250522_03.jpg',
          alt: 'Kitchen'
        }, {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/7d67aee9-46e0-4349-a83d-32925666f7e8/hp_fresheners-cleaningStorefront_m_480_250522_04.jpg',
          alt: 'Fresheners'
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
      <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Cleaning & Household</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )
}

export default Cleaning