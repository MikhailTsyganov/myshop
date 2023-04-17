import { FC, useState, useEffect, useRef } from "react";
import { SliderProps } from ".";
import {
  StyledSlider,
  WrapperSliderImages,
  WrapperSliderPagination,
} from "./Slider.styles";
import { ButtonCircle } from "components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Slider: FC<SliderProps> = (props) => {
  const [sliderWidth, setSliderWidth] = useState(0);
  const [offset, setOffset] = useState(1440);
  const wrapperSliderImagesEl = useRef(null);
  console.log(wrapperSliderImagesEl.current);

  useEffect(() => {
    window.addEventListener("resize", () => {
      // const width = wrapperSliderImagesEl.current.offsetWidth;
    });
  }, []);

  const onButtonHandler = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case "slider_button--prev":
        setOffset((prevState) => prevState + 1440);
        break;
      case "slider_button--next":
        setOffset((prevState) => prevState - 1440);
        break;
    }
  };

  const baseUrl = process.env.PUBLIC_URL + `/images`;

  return (
    <StyledSlider {...props}>
      <WrapperSliderImages offset={offset} ref={wrapperSliderImagesEl}>
        <ButtonCircle
          className="slider_button"
          id="slider_button--prev"
          onClick={onButtonHandler}
        >
          <FaArrowLeft />
        </ButtonCircle>
        <ButtonCircle
          className="slider_button"
          id="slider_button--next"
          onClick={onButtonHandler}
        >
          <FaArrowRight />
        </ButtonCircle>
        <div className="images_container">
          <img src={baseUrl + "/slider1.webp"} alt="1" />
          <img src={baseUrl + "/slider2.webp"} alt="2" />
          <img src={baseUrl + "/slider3.webp"} alt="3" />
        </div>
      </WrapperSliderImages>
      <WrapperSliderPagination></WrapperSliderPagination>
    </StyledSlider>
  );
};
