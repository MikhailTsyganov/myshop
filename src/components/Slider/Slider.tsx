import { FC, useState, useEffect, useRef } from "react";
import { SliderProps } from ".";
import {
  StyledSlider,
  WrapperSliderImages,
  WrapperSliderPagination,
} from "./Slider.styles";
import { ButtonCircle, ButtonSliderDots } from "components";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const Slider: FC<SliderProps> = (props) => {
  const { autoplay = true, autoplayTime = 5000 } = props;
  const array = [
    { id: 1, src: "/slider1.webp" },
    { id: 2, src: "/slider2.webp" },
    { id: 3, src: "/slider3.webp" },
  ];

  let interval: NodeJS.Timeout;
  const [sliderWidth, setSliderWidth] = useState(0);
  const [slide, setSlide] = useState(0);

  const wrapperSliderImagesEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", calculateSliderWidth);
    calculateSliderWidth();

    return () => {
      window.removeEventListener("resize", calculateSliderWidth); // TODO: проверить отрабатывает ли
    };
  }, []);

  useEffect(() => {
    if (!autoplay) return; //  TODO:  || images

    interval = setInterval(() => {
      onButtonHandler();
    }, autoplayTime);

    return () => {
      clearInterval(interval);
    };
  }, [, slide]);

  const onStopSlider = (e: React.MouseEvent) => {
    switch (e.type) {
      case "mouseover":
        clearInterval(interval);
        break;
      case "mouseout":
        if (!autoplay) return;
        interval = setInterval(() => {
          onButtonHandler();
        }, autoplayTime);
        break;
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
        setSlide((prevState) =>
          prevState === 0 ? array?.length - 1 : prevState - 1
        );

        break;

      default:
        setSlide((prevState) =>
          prevState === array?.length - 1 ? 0 : prevState + 1
        );
        break;
    }
  };

  const goToSlide = (e: React.MouseEvent) => {
    setSlide(Number(e.currentTarget.id));
  };

  const baseUrl = process.env.PUBLIC_URL + `/images`;

  return (
    <StyledSlider {...props}>
      <WrapperSliderImages
        offset={sliderWidth * slide}
        ref={wrapperSliderImagesEl}
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
        <div className="images_container">
          {array.map(({ id, src }) => (
            <img
              key={id}
              src={baseUrl + src}
              alt={src}
              onMouseOver={onStopSlider}
              onMouseOut={onStopSlider}
            />
          ))}
        </div>
      </WrapperSliderImages>
      <WrapperSliderPagination>
        <ul>
          {array.map(({ id }, idx) => (
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
