import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function YourDailyStaples() {
    const result = [
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_blended-cooking-oil-staplesStorefront_m_480_250522_01.jpg',
          alt: 'oils'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_rice-bran-oils-staplesStorefront_m_480_250522_02.jpg',
          alt: 'oils2'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_cooking-pasta-staplesStorefront_m_480_250522_03.jpg',
          alt: 'Pasta'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_herbs-seasoning-staplesStorefront_m_480_250522_04.jpg',
          alt: 'Herbs Seasoning'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_powder-spices-staplesStorefront_m_480_250522_05.jpg',
          alt: 'Powder Spice'
        },
        {
          url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a698bf9a-6e01-40d2-bc7c-9a7f12b68a6a/hp_blended-masala-staplesStorefront_m_480_250522_06.jpg',
          alt: 'Blended Masala'

        }
      ];
    
    const cards = result.map((el) => {
        return (<Grid item xs={2}>
          <CardActionArea>
          <Card >
            <img src={el.url}
              alt={el.alt} height={133} width={178} />
          </Card>
          </CardActionArea>
        </Grid>);
      });
    
  return (
    <Container maxWidth={'lg'} sx={{marginTop: 5}}>
      <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Your Daily Staples</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )
}

export default YourDailyStaples