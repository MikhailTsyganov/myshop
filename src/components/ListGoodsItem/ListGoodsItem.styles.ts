import styled, { css } from "styled-components";

interface StyledListGoodsItemProps {
  type?: string;
}

export const StyledListGoodsItem = styled.li<StyledListGoodsItemProps>`
  ${({ type }) => {
    switch (type) {
      case "main":
        return css`
          text-align: center;
          border: 1px solid red;
        `;

      case "sidebar":
        return css`
          display: flex;
          align-items: center;
          height: 28px;
          padding-left: 5px;
          font-size: 16px;
          cursor: pointer;
          border-radius: 8px;

          &:hover {
            background-color: #cb11ab;
            color: #fff;
          }

          &:not(:last-child) {
            margin-bottom: 10px;
          }
        `;
      case "footer":
        return css`
          margin-bottom: 12px;
          font-size: 18px;
          line-height: 24px;
          padding: 0;
          color: ${({ theme }) => theme.colors.semitransparent};
          cursor: pointer;

          &:hover {
            color: ${({ theme }) => theme.colors.white};
          }
        `;

      default:
        return css``;
    }
  }}
`;
