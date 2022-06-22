import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function BrandStore() {
  const result = [
    {
      url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_amul-brandStorefront_m_480_250522_01.jpg',
      alt: 'amul'
    },
    {
      url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_dettol-brandStorefront_m_480_250522_02.jpg',
      alt: 'dettol'
    },
    {
      url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_coco-cola-brandStorefront_m_480_250522_03.jpg',
      alt: 'Coca-Cola'
    },
    {
      url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_loreal-brandStorefront_m_480_250522_04.jpg',
      alt: 'Loreal'
    },
    {
      url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_india-gate-brandStorefront_m_480_250522_05.jpg',
      alt: 'India Gate'
    },
    {
      url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/72a08674-af35-4c02-a9ab-237934c8d315/hp_durex-brandStorefront_m_480_250522_06.jpg',
      alt: 'durex'
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
      <Typography component='div' textAlign={'ceneter'} fontSize={'24px'}>Brand Store</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )

}

export default BrandStore