import styled from "styled-components";

export const StyledWrapperBasketFullFlex = styled.div`
  margin-top: 24px;
  @media ${({ theme }) => theme.media.lg} {
    display: flex;
    justify-content: space-between;
    /* align-items: end; */

    & section {
      /* height: 100%; */
      width: calc(50% - 20px);
      /* margin-top: 0; */

      /* @media ${({ theme }) => theme.media.md} {
        margin-top: 24px;
      } */
    }
  }
`;
