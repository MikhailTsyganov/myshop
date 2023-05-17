import styled from "styled-components";

export const StyledGoodsItemHomepage = styled.li`
  /* text-align: center; */
  /* border: 1px solid red; */

  & img {
    border-radius: 8px;
  }

  & p {
    font-weight: 700;
  }

  & h2 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    font-size: 14px;
    line-height: 20px;
    color: #9d9da5;
    font-weight: 400;

    & span {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
