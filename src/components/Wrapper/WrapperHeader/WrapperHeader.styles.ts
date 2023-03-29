import styled from "styled-components";
import { WrapperStandart } from "../WrapperStandart";

export const StyledWrapperHeader = styled(WrapperStandart)`
  @media ${({ theme }) => theme.media.md} {
    flex-wrap: wrap;
  }
`;
