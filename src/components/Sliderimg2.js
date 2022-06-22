import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, CardActionArea } from "@mui/material";
import Slider from "react-slick";

const SliderImg2 = (props) => {
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
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_m_babycare_250522_400-250522.jpg" alt="carousel-1" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_m_petstore_250522_400-250522.jpg " alt="carousel-2" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_m_health_suppliment_250522_400-250522.jpg" alt="carousel-4" />
        </CardActionArea>
      </Slider>
    </Container>
  );
};

export default SliderImg2;