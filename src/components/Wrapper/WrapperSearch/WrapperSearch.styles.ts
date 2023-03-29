import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

export const StyledWrapperSearch = styled(WrapperStandart)`
  width: 100%;

  @media ${({ theme }) => theme.media.sm} {
    display: none;
  }
  @media ${({ theme }) => theme.media.md} {
    margin-top: 8px;
  }
  @media ${({ theme }) => theme.media.lg} {
    margin-right: 50px;
    margin-left: 20px;
  }
`;
