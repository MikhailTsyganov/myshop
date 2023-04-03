import styled from "styled-components";

export const StyledWrapperBasketFullFlex = styled.div`
  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    justify-content: space-between;

    & section {
      width: calc(50% - 20px);
    }
  }
`;
