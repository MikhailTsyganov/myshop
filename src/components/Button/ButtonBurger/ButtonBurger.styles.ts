import styled from "styled-components";
import { StyledButtonStandart } from "../ButtonStandart/ButtonStandart.styles";

export const StyledButtonBurger = styled(StyledButtonStandart)`
  position: relative;
  min-width: 48px;
  height: 48px;
  margin-right: 20px;
  border: 1px solid ${({ theme }) => theme.colors.semitransparent};
  background-color: inherit;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.white};
  }

  div {
    width: 28px;
    height: 4px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 4px;

    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 4px;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 4px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 4px;
      margin: 0 auto;
      background-color: ${({ theme }) => theme.colors.white};
      border-radius: 4px;
    }
  }
`;
