import styled from "styled-components";

export const StyledListBasketFull = styled.ul``;

export const StyledListItemBasketFull = styled.li`
  display: flex;
  margin-top: 24px;

  & .listItemBasketFull_info {
    width: calc(50%%);
    margin-left: 20px;
    margin-right: 30px;
  }

  & .listItemBasketFull_price {
    margin-left: auto;
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
  }
`;
