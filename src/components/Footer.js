import { CardActionArea, Container, Grid, Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'

function Footer() {
    return (
        <Container maxWidth="lg" sx={{ p: 6, marginBottom: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={3} sx={{ p: 4 }}>
                    <Typography component='div' sx={{ lineHeight: 1.4, fontSize: 16, p: 1 }} color='#6cd138'>bigbasket</Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >About Us </a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >In News </a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >Green bigbasket </a></Typography>
                    <Typography component='div' sx={{ p: 1 }} ><a href="/" style={{ textDecoration: 'none', color: '#333' }} >Privacy Policy</a></Typography>
                    <Typography component='div' sx={{ p: 1 }} ><a href="/" style={{ textDecoration: 'none', color: '#333' }} > Affiliate</a></Typography>
                    <Typography component='div' sx={{ p: 1 }} ><a href="/" style={{ textDecoration: 'none', color: '#333' }} >Terms and Condition</a></Typography>
                    <Typography component='div' sx={{ p: 1 }} ><a href="/" style={{ textDecoration: 'none', color: '#333' }} >Careers At bigbasket</a></Typography>
                    <Typography component='div' sx={{ p: 1 }} ><a href="/" style={{ textDecoration: 'none', color: '#333' }} >bb Instant</a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >bb Daily</a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >bb Blog </a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >bbnow </a></Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component='div' color='#6cd138' sx={{ p: 1 }}>Help</Typography>

                    <Typography varient='ul' component='div' sx={{ p: 1 }} ><a href="/" style={{ textDecoration: 'none', color: '#333' }} > FAQs</a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >Contact Us</a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >bb Wallet FAQs</a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >bb Wallet T&Cs</a></Typography>
                    <Typography component='div' sx={{ p: 1 }}><a href="/" style={{ textDecoration: 'none', color: '#333' }} >Vendor Connect</a></Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component={'div'} color='#6cd138' sx={{ p: 1 }}>Download Our App</Typography>
                    <CardActionArea sx={{ p: 1 }}>
                        <img src='https://www.bbassets.com/static/v2559/custPage/build/content/img/Google-App-store-icon.png' alt='playstore' />
                    </CardActionArea>
                    <CardActionArea sx={{ p: 1 }}>
                        <img src='https://www.bbassets.com/static/v2559/custPage/build/content/img/Apple-App-store-icon.png' alt='app store' />
                    </CardActionArea>
                </Grid>
                <Grid item xs={3}>
                    <Typography component={'div'} color='#6cd138' sx={{ p: 1 }}>GetSocial With Us</Typography>
                    <Grid container spacing={2}>
                        <Grid item sx={4}>
                            <CardActionArea sx={{ p: 1 }}>
                                <FacebookIcon />
                            </CardActionArea>
                        </Grid>
                        <Grid item sx={4}>
                            <CardActionArea sx={{ p: 1 }}>
                                <PinterestIcon />
                            </CardActionArea>
                        </Grid>
                        <Grid item sx={4}>
                            <CardActionArea sx={{ p: 1 }}>
                                <TwitterIcon />
                            </CardActionArea>
                        </Grid>
                        <Grid item sx={4}>
                            <CardActionArea sx={{ p: 1 }}>
                                <InstagramIcon />
                            </CardActionArea>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Container >

    )
}

export default Footer