import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1500px;
  margin: 0 auto;
  @media ${({ theme }) => theme.media.md} {
    padding: 0 16px;
  }
  @media ${({ theme }) => theme.media.lg} {
    padding: 0 32px;
  }
`;
