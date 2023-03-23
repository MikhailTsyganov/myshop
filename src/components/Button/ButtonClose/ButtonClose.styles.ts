import styled from "styled-components";
import { StyledButtonStandart } from "../ButtonStandart/ButtonStandart.styles";

export const StyledButtonClose = styled(StyledButtonStandart)`
  position: absolute;
  top: 8px;
  right: -40px;
  width: 34px;
  height: 34px;
  border: none;
  background-color: unset;

  &::before,
  &::after {
    position: absolute;
    content: "";
    display: block;
    width: 28px;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
    top: 50%;
    left: 50%;
  }

  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }
`;
