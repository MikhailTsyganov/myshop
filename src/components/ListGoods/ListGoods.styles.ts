import styled, { css } from "styled-components";

interface StyledListGoodsProps {
  type?: string;
}

export const StyledListGoods = styled.ul<StyledListGoodsProps>`
  ${({ type }) => {
    switch (type) {
      case "main":
        return css`
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(155px, 1fr));
          grid-gap: 32px 16px;
        `;

      default:
        return css``;
    }
  }}
`;
