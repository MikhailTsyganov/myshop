import { WrapperStandart } from "components/Wrapper/WrapperStandart";
import styled from "styled-components";

export const StyledWrapperHeaderPersonalButton = styled(WrapperStandart)`
  @media ${({ theme }) => theme.media.md} {
    margin-left: auto;
  }
  @media ${({ theme }) => theme.media.lg} {
    order: 1;
  }
`;
