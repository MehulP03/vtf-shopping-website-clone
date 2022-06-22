import { Container, Grid, Typography } from '@mui/material'
import React from 'react'

function Footer() {
  return (
    <Container maxWidth="lg" sx={{p:6}}>
        <Grid container spacing={2}>
            <Grid item xs={3} sx={{p:4}}>
                <Typography component={'div'} sx={{lineHeight: 1.4, fontSize: 16}} color='#6cd138'>bigbasket</Typography>                
                <Typography component={'div'}  ><a href="/" style={{textDecoration: 'none', color:'#333'}} >About Us </a></Typography>
                <Typography component={'div'} sx={{lineHeight: 1.4, fontSize: 15}}>In News</Typography>
                <Typography component={'div'} sx={{lineHeight: 1.4, fontSize: 15}}>Green bigbasket</Typography>
                <Typography component={'div'} sx={{lineHeight: 1.4, fontSize: 15}}>Privacy Policy</Typography>
                <Typography component={'div'} >bigbasket</Typography>
                <Typography component={'div'} >bigbasket</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography component={'div'}  color='#6cd138'>Help</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography component={'div'}  color='#6cd138'>Download Our App</Typography>
            </Grid>
            <Grid item xs={3}>
                <Typography component={'div'}  color='#6cd138'>GetSocial With Us</Typography>
            </Grid>
        </Grid>
    </Container>

  )
}

export default Footer