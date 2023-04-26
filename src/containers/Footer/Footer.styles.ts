import { StyledWrapperStandart } from "components/Wrapper/WrapperStandart/WrapperStandart.styles";
import styled, { css } from "styled-components";

export const StyledFooter = styled.footer<{ view?: "basket" }>`
  position: relative;
  padding: 68px 0 48px;
  background-color: ${({ theme }) => theme.colors.secondary};

  &::before {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 0 0 24px 24px;

    ${({ view, theme }) => {
      switch (view) {
        case "basket":
          return css`
            background-color: ${theme.colors.bgcBasket};
          `;

        default:
          return css`
            background-color: ${theme.colors.white};
          `;
      }
    }}
  }
`;

export const WrapperFooter = styled(StyledWrapperStandart)`
  display: flex;
  align-items: start;
  cursor: pointer;

  @media ${({ theme }) => theme.media.sm} {
    display: block;

    & > :nth-child(4) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const WrapperFooterItems = styled(StyledWrapperStandart)`
  width: calc(29% - 8px * 2);
  margin: 0px 8px;
  & section {
    width: 100%;
    margin-left: 0;
  }

  @media ${({ theme }) => theme.media.sm} {
    width: 100%;
    margin: 0;
  }
`;
