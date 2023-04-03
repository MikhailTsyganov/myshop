import styled from "styled-components";
import { StyledButtonStandart } from "../ButtonStandart/ButtonStandart.styles";

export const StyledHeaderPersonalButton = styled(StyledButtonStandart)`
  height: 53px;
  background-color: inherit;
  border: none;
  border-radius: 0;
  font-size: 14px;
  font-weight: 400;
  /* cursor: pointer; */

  &:last-child {
    display: none;
  }
  &:first-child {
    margin-right: 36px;
  }

  svg {
    width: 100%;
    height: 27px;
    margin-bottom: 6px;
    /* fill: ${({ theme }) => theme.colors.white}; */
    stroke: ${({ theme }) => theme.colors.white};
  }

  & > span {
    color: ${({ theme }) => theme.colors.semitransparent};
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;

    &:last-child {
      display: block;
    }
  }
`;
