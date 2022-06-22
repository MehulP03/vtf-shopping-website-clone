import {
    Card,
    CardActionArea,
    Container,
    Grid,
    Typography,
    Button,
    CardMedia,
    CardContent,
    CardActions,
    FormControl,
    Select,
    InputLabel,
    MenuItem
  } from "@mui/material";
  import React from "react";
  
  function BestSellers() {
    const [age, setAge] = React.useState("");
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };
  
    return (
      <Container maxWidth={"lg"} sx={{ marginTop: 5 }}>
        <Typography component="div" textAlign={"center"} fontSize={"24px"}>
          Best Sellers{" "}
        </Typography>
        <hr />
        <Grid container spacing={3}>
          <Grid item sx={3}>
            <CardActionArea>
              <Card sx={{ maxWidth: "250px" }}>
                <img
                  height="200"
                  width="200"
                  src="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="p" component="div">
                    Capsium- Green
                  </Typography>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={age}
                      label="Price"
                      onChange={handleChange}
                      sx={{ height:'30px', width:'150px' }}
                    >
                      <MenuItem value={10}>500g -Rs129</MenuItem>
                      <MenuItem value={20}>500g -Rs129</MenuItem>
                      <MenuItem value={30}>500g -Rs129</MenuItem>
                    </Select>
                  </FormControl>
                  <Typography variant="body2" color="text.secondary" sx={{ backgroundColor:'#C5C5C5', marginTop:'5px' }}>
                    <strike>Rs 150</strike>&nbsp;&nbsp;<p>Rs 100</p>
                    <p>Standard delivery 26Jun</p>
                  </Typography>
                </CardContent>
                <CardActions>
                <Button variant="contained" size="small">Cart</Button>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item sx={3}>
            <CardActionArea>
              <Card sx={{ maxWidth: "250px" }}>
                <CardMedia
                  component="img"
                  height={200}
                  image="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item sx={3}>
            <CardActionArea>
              <Card sx={{ maxWidth: "250px" }}>
                <CardMedia
                  component="img"
                  height={200}
                  image="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>
          <Grid item sx={3}>
            <CardActionArea>
              <Card sx={{ maxWidth: "250px" }}>
                <CardMedia
                  component="img"
                  height={200}
                  image="https://www.bigbasket.com/media/uploads/p/s/10000069_20-fresho-capsicum-green.jpg"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over
                    6,000 species, ranging across all continents except Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </CardActionArea>
          </Grid>
        </Grid>
      </Container>
    );
  }
  
  export default BestSellers;