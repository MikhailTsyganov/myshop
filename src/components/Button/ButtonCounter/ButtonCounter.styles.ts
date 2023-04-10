import styled from "styled-components";
import { StyledButtonStandart } from "../ButtonStandart/ButtonStandart.styles";

export const StyledButtonCounter = styled(StyledButtonStandart)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: transparent;
  background-color: ${({ theme }) => theme.colors.bgcCounter};

  svg {
    pointer-events: none;
  }
`;
