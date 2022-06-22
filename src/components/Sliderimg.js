import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, CardActionArea } from "@mui/material";
import Slider from "react-slick";

const SliderImg = (props) => {
  let CarPos = {
    data: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
      <Slider {...CarPos} style={{paddingTop:'70px'}}>

        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_fom_m_bbpl-staples_460_210622_Bangalore.jpg" alt="carousel-1" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/fresho_days_fnv_Bangalore_1600x460_22ndJUN22.jpg" alt="carousel-2" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/HP_EMF_M_WeekdayBangalore-1600x460_220622-1.jpeg" alt="carousel-3" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_flavoured-milk_460-250522.jpg" alt="carousel-4" />
        </CardActionArea>

        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_b_h_m_tbcd_snacking-store_460-250522.jpg" alt="carousel-5" />
        </CardActionArea>

        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg" alt="carousel-6" />
        </CardActionArea>
        <CardActionArea>
          <img src="//www.bigbasket.com/media/uploads/banner_images/hp_b_h_GM-duper-deals_460-250522.jpg" alt="carousel-6" />
        </CardActionArea>
      </Slider>
  );
};

export default SliderImg;