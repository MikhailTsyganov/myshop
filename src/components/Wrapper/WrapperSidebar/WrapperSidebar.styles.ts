import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

export const StyledWrapperSidebar = styled(WrapperStandart)`
  /* position: relative; */
  width: 285px;
  height: 100%;
  padding: 20px 24px 20px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};

  @media ${({ theme }) => theme.media.sm} {
    width: 100%;
  }
`;
