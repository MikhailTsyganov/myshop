import styled from "styled-components";
import { ButtonStandart } from "../ButtonStandart";

export const StyledButtonCounter = styled(ButtonStandart)`
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
