import { FC, useState } from "react";
import { GoodDetailsSliderProps } from ".";
import { StyledGoodDetailsSlider } from "./GoodDetailsSlider.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const GoodDetailsSlider: FC<GoodDetailsSliderProps> = (props) => {
  const { slides } = props;

  const [slide, setSlide] = useState(0);
  console.log(slides);
  //TODO: добавить brakepoints
  return (
    <StyledGoodDetailsSlider {...props}>
      <Swiper
        // spaceBetween={300}
        tag="ul"
        slidesPerView={2}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} tag="li">
            <img src={slide.path} alt={slide.path} />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledGoodDetailsSlider>
  );
};
