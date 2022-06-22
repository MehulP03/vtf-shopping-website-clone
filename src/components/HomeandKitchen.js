import { Card,CardActionArea, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function HomeandKitchen() {
    const result = [
      {
        url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_under-99_m_110622_01.jpg',
        alt: 'Under 99'
      },
      {
        url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_100-199_m_110622_02.jpg',
        alt: '100Rs - 199Rs'
      },
      {
        url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_glassware_m_110622_03.jpg',
        alt: 'Glassware'
      },
      {
        url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_container_m_110622_04.jpg',
        alt: 'container sets'
      },  {
          url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_brooms_m_110622_05.jpg',
          alt: 'Brooms and Dust pans'
        },
        {
          url: '//www.bigbasket.com/media/customPage/b01eee88-e6bc-410e-993c-dedd012cf04b/f5c62903-082f-434b-aaae-c7f14473b6c8/ea107226-bad2-481e-9cb8-83d2a444171d/hp_leds_m_110622_06.jpg',
          alt: 'battery and leds'

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
      <Typography component='div' textAlign={'center'} fontSize={'24px'}>Home and Kitchen</Typography>
      <hr />
      <Grid container spacing={2}>
        {cards}
      </Grid>
    </Container>
  )
}

export default HomeandKitchen