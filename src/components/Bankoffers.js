import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Bankoffers() {
  const result = [
    {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_paytm_360_070622.jpg',
      alt: 'paytm'
    },
    {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_indus_360_070622.jpg',
      alt: 'induslnd'
    },
    {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/hp_aff_m_rbl_360_070622.jpg',
      alt: 'rbl'
    }, {
      url: 'https://www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/a23d656d-e2a5-45c3-b895-69c638fd780d/cp_m_aff_dbs_360_150622.jpg',
      alt: 'digi bank'
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
    <Container maxWidth={'lg'}>
      <CardActionArea>
        <Card>
      <img src='https://www.bigbasket.com/media/uploads/banner_images/cp_pbs_entrypoint_1130x400_060622.jpg'
      alt='advertisement' height={399} width={1128}/>
      </Card>
      </CardActionArea>
      <Typography component='div' textAlign={'center'} fontSize={'24px'} marginTop={3}>Bank Offers</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )

}

export default Bankoffers