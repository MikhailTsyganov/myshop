import { StyledWrapperStandart } from "components/Wrapper/WrapperStandart/WrapperStandart.styles";
import styled from "styled-components";

export const StyledSlider = styled.div`
  min-width: 100%;
  margin: 0 0 36px;
`;

export const WrapperSliderImages = styled(StyledWrapperStandart)`
  position: relative;
  height: 370px;
  border-radius: 24px;
  overflow: hidden;

  .slider_button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.5;
    z-index: 9;

    & svg {
      width: 18px;
      height: 18px;
    }
    &:hover svg {
      fill: ${({ theme }) => theme.colors.primary};
    }

    &:hover {
      opacity: 1;
    }
  }

  #slider_button--prev {
    left: 28px;
  }

  #slider_button--next {
    right: 28px;
  }
`;

export const WrapperImagesContainer = styled(StyledWrapperStandart)<{
  offset: number;
  src?: string;
  // ref?: React.MutableRefObject<HTMLDivElement | null> | undefined;
}>`
  display: flex;
  height: 100%;
  transform: translateX(
    ${({ offset }) => -offset}px
  ); // перед offset стоит минус
  transition: transform ease 1s;

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const WrapperSliderPagination = styled(StyledWrapperStandart)`
  width: 200px;
  height: 20px;
  margin: 22px auto 0;
  /* border: 1px solid red; */

  & ul {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
  & li {
    /* margin-right: 15px; */
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`;
