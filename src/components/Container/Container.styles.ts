import styled from "styled-components";

export const StyledContainer = styled.div`
  @media ${({ theme }) => theme.media.md} {
    padding: 0 16px;
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 0 32px;
  }
`;
