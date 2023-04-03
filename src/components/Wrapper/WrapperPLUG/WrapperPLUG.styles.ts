import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

interface IStyledWrapperPLUG {
  minWidth?: string;
  height?: string;
  bgc?: string;
  margin?: string;
}

export const StyledWrapperPLUG = styled(WrapperStandart)<IStyledWrapperPLUG>`
  min-width: ${({ minWidth }) => minWidth};
  height: ${({ height }) => height};
  background-color: ${({ bgc }) => bgc};
  margin: ${({ margin }) => margin};
`;
