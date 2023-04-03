import styled from "styled-components";

export const StyledFullBasket = styled.div`
  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    align-items: start;
    justify-content: space-between;
  } ;
`;
