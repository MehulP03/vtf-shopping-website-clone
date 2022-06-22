import { CardActionArea, Container, Grid} from '@mui/material'
import React from 'react'

function Deals() {
  return (
  <Container maxWidth="lg" sx={{p:2, marginBottom:4}}>
    <Grid container spacing={1}>
        <Grid item sx={1}>
            <CardActionArea>
                    <img src="//www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_combostore_190x60_250522.png" alt='COMBO STORE' height={60} width={180} />
            </CardActionArea>

        </Grid>
        <Grid item sx={1}>
            <CardActionArea>
                <img src="//www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_dealsoftheweek_190x60_250522.png" alt='Deal if the week' height={60} width={180}/>
            </CardActionArea>

        </Grid>
        <Grid item sx={1}>
            <CardActionArea>
                    <img src="//www.bigbasket.com/media/uploads/banner_images/hp_neu-pass-topstrip_m_250622_02.png" alt='NEUPASS' height={60} width={180}/>
            </CardActionArea>

        </Grid>
        <Grid item sx={1}>
            <CardActionArea>
                   <img src='//www.bigbasket.com/media/uploads/banner_images/hp_ayurveda-topstrip_m_250622_03.png' alt='AYURVEDA' height={60} width={180}/>
            </CardActionArea>

        </Grid>
        <Grid item sx={1}>
            <CardActionArea>
                <img src="//www.bigbasket.com/media/uploads/banner_images/hp_buy-more-save-more-topstrip_m_250622_04.png" alt='BUY MORE SAVE MORE' height={60} width={180}/>
            </CardActionArea>
        </Grid>
        <Grid item sx={1}>
            <CardActionArea>
            <img src="//www.bigbasket.com/media/uploads/banner_images/hp_topstrip_m_emf_190x60_250522.png" alt='EGGS, MEAT AND FISH' height={60} width={180}/>
            </CardActionArea>
        </Grid>
    </Grid>

  </Container>
  )
}

export default Deals