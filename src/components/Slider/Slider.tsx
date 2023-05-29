import { FC, useState, useEffect, useRef } from "react";
import { SliderProps } from ".";
import {
  StyledSlider,
  WrapperSliderImages,
  WrapperSliderPagination,
  WrapperImagesContainer,
} from "./Slider.styles";
import { ButtonCircle, ButtonSliderDots } from "components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRefWidthWindowResize } from "hooks/useRefWidthWindowResize";

import { sliderImagesApi } from "redux/api/sliderImages/sliderImages.api";

export const Slider: FC<SliderProps> = (props) => {
  const { autoplay, autoplayTime = 5000 } = props;

  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const { elementWidth, refElement } = useRefWidthWindowResize();

  const { data, isSuccess } = sliderImagesApi.useGetSliderImagesQuery("");

  const interval = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isSuccess) {
      setImages(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (!autoplay || images.length === 0) return;

    interval.current = setInterval(() => {
      onButtonHandler();
    }, autoplayTime);
    return () => {
      clearInterval(interval.current);
    };
  }, [images.length]);

  const onStopSlider = (e: React.MouseEvent) => {
    if (!autoplay || images.length === 0) return;

    switch (e.type) {
      case "mouseenter":
        clearInterval(interval.current);
        return;
      case "mouseleave":
        interval.current = setInterval(() => {
          onButtonHandler();
        }, autoplayTime);
        return;
    }
  };

  const onButtonHandler = (e?: React.MouseEvent) => {
    switch (e?.currentTarget.id) {
      case "slider_button--prev":
        setSlide((prevState) =>
          prevState === 0 ? images?.length - 1 : prevState - 1
        );

        return;

      default:
        setSlide((prevState) =>
          prevState === images?.length - 1 ? 0 : prevState + 1
        );
        return;
    }
  };

  const goToSlide = (e: React.MouseEvent) => {
    setSlide(Number(e.currentTarget.id));
  };

  return (
    <StyledSlider {...props}>
      <WrapperSliderImages
        onMouseEnter={onStopSlider}
        onMouseLeave={onStopSlider}
      >
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
        <WrapperImagesContainer
          className="images_container"
          ref={refElement}
          offset={Number(elementWidth) * slide}
        >
          {images.map(({ id, path }) => (
            <img key={id} src={path} alt={path} />
          ))}
        </WrapperImagesContainer>
      </WrapperSliderImages>
      <WrapperSliderPagination>
        <ul>
          {images.map(({ id }, idx) => (
            <li key={id}>
              <ButtonSliderDots
                slide={slide}
                id={`${idx}`}
                onClick={goToSlide}
              ></ButtonSliderDots>
            </li>
          ))}
        </ul>
      </WrapperSliderPagination>
    </StyledSlider>
  );
};
