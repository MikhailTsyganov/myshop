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
    margin-left: 36px;
  }

  svg {
    width: 100%;
    height: 27px;
    margin-bottom: 6px;
    fill: ${({ theme }) => theme.colors.white};
  }

  & > span {
    color: ${({ theme }) => theme.colors.semitransparent};
  }
`;
