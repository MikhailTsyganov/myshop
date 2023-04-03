import styled from "styled-components";

export const StyledWrapperBasketFull = styled.section`
  padding: 24px;
  border-radius: 20px;
  background-color: #ccc;

  &:not(:first-child),
  &:not(:last-child) {
    margin-top: 24px;
  }


  @media ${({ theme }) => theme.media.lg} {
    
     &.WrapperBasketFullTotal {
      width: 340px;
      margin-left: 40px;
     }
      
    }
  }
`;
