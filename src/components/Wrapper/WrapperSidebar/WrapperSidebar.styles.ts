import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

export const StyledWrapperSidebar = styled(WrapperStandart)`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
  z-index: 99999;

  @media ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;
