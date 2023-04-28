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

import { sliderImagesApi } from "redux/api/slider-images-query/slider-images-query";

export const Slider: FC<SliderProps> = (props) => {
  const { autoplay, autoplayTime = 5000 } = props;

  // let interval: NodeJS.Timeout | undefined = undefined;
  const [images, setImages] = useState([]);

  const [sliderWidth, setSliderWidth] = useState(0);
  const [slide, setSlide] = useState(0);
  // const [isRunningSlider, setIsRunningSlider] = useState(true);

  const { data, isSuccess } = sliderImagesApi.useGetSliderImagesQuery("");

  const wrapperSliderImagesEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSuccess) {
      setImages(data);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    window.addEventListener("resize", calculateSliderWidth);
    calculateSliderWidth();

    return () => {
      window.removeEventListener("resize", calculateSliderWidth); // TODO: проверить отрабатывает ли
    };
  }, []);

  const interval = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (!autoplay || images.length === 0) return; //  TODO:  || images
    console.log("useEffect ДО", interval);

    interval.current = setInterval(() => {
      onButtonHandler();
    }, autoplayTime);
    console.log("useEffect ПОСЛЕ", interval);
    return () => {
      clearInterval(interval.current);
    };
  }, [images.length]); /// убрал зависимость от слайда

  const onStopSlider = (e: React.MouseEvent) => {
    if (!autoplay) return;
    // console.log(interval);
    // interval = undefined;
    // console.log(e.currentTarget === e.target);
    // console.log(e.currentTarget);
    console.log(e.type);
    switch (e.type) {
      case "mouseenter":
        // setIsRunningSlider(false);
        console.log("mouseenter 111111", interval);
        clearInterval(interval.current);
        // interval = undefined;
        console.log("mouseenter 222222", interval);
        return;
      case "mouseleave":
        // setIsRunningSlider(true);
        console.log("LEAVE 1111111111111111", interval);
        interval.current = setInterval(() => {
          onButtonHandler();
        }, autoplayTime);
        console.log("LEAVE 22222222222222222", interval);
        return;
    }
  };

  const calculateSliderWidth = () => {
    if (wrapperSliderImagesEl.current != null) {
      const width = wrapperSliderImagesEl.current.offsetWidth;
      setSliderWidth(width);
    }
  };

  const onButtonHandler = (e?: React.MouseEvent) => {
    switch (e?.currentTarget.id) {
      case "slider_button--prev":
        console.log("slider_button--prev");

        setSlide((prevState) =>
          prevState === 0 ? images?.length - 1 : prevState - 1
        );

        return;

      default:
        console.log("slider_button--next");
        setSlide((prevState) =>
          prevState === images?.length - 1 ? 0 : prevState + 1
        );
        return;
    }
  };

  const goToSlide = (e: React.MouseEvent) => {
    setSlide(Number(e.currentTarget.id));
  };

  const baseUrl = process.env.PUBLIC_URL + `/images`;

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
          ref={wrapperSliderImagesEl}
          offset={sliderWidth * slide}
        >
          {images.map(({ id, path }) => (
            <img key={id} src={baseUrl + path} alt={path} />
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
