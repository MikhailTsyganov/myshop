import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

export const StyledWrapperHomeAboutUs = styled(WrapperStandart)`
  position: relative;
  margin: "72px 0 0";

  &.WrapperHomeAboutUs--hidden {
    height: 136px;
    overflow: hidden;
  }
`;
