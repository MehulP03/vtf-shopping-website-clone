import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, CardActionArea } from "@mui/material";
import Slider from "react-slick";

const FeaturedSlideimg = (props) => {
  let CarPos = {
    data: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Container maxWidth="lg" sx={{ p: 6 }}>
      <Slider {...CarPos}>

        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_c_vegan-burrito_cxnp-9690_400_220622.jpg" alt="carousel-1" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_c_coconut-9691_400_220622.jpg" alt="carousel-2" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_c_vegan-chocolate_cxnp-9692_400_220622.jpg" alt="carousel-3" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_c_winner_cxnp-9688_400_220622.jpg" alt="carousel-4" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_c_submit_cxnp-9687_400_220622.jpg" alt="carousel-4" />
        </CardActionArea>
      </Slider>
    </Container>
  );
};

export default FeaturedSlideimg;