import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

export const StyledWrapperHomeAboutUs = styled(WrapperStandart)`
  position: relative;
  margin: "72px 0 0";
  // height="136px"
  // overflow="hidden"

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 35px;
    background: linear-gradient(rgba(255, 255, 255, 0), #fff);
    bottom: 0;
    left: 0;
    z-index: 5;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;
