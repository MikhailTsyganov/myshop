import styled from "styled-components";

export const StyledGoodDetailsSlider = styled.div`
  /* overflow: hidden; */

  img {
    @media ${({ theme }) => theme.media.xxs} {
      width: 90vw;
      /* width: 100%; */
    }
  }

  @media ${({ theme }) => theme.media.xxs} {
    margin: 0 -16px;
  }
`;
