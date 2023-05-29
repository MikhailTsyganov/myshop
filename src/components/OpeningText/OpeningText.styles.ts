import styled, { css } from "styled-components";
import { THidden } from "./OpeningText.props";

export const StyledOpeningText = styled.div<{
  height: string;
  isOpen: boolean;
  isHidden?: THidden;
}>`
  & .OpeningText_text {
    position: relative;

    ${({ isOpen, height }) => {
      switch (isOpen) {
        case true:
          return css`
            overflow: auto;
            height: auto;
          `;
        case false:
          return css<{ height: typeof height }>`
            overflow: hidden;
            height: ${(props) => props?.height};

            &::after {
              content: "";
              position: absolute;
              width: 100%;
              height: 35px;
              background: linear-gradient(rgba(255, 255, 255, 0), #fff);
              bottom: 0;
              left: 0;
              z-index: 5;
            }
          `;
      }
    }}
  }

  ${({ isHidden }) =>
    isHidden &&
    css`
      @media ${({ theme }) => theme.media[isHidden]} {
        display: none;
      }
    `}
`;

export const ShowButton = styled.button<{ colorizedButton?: boolean }>`
  padding: 0;
  border: none;
  border-bottom: 1px dashed;
  line-height: 22px;
  text-decoration: none;
  background-color: transparent;
  border-color: ${({ theme }) => theme.colors.grey};
  display: inline-block;
  border-radius: 0;
  color: ${({ theme }) => theme.colors.grey};
  cursor: pointer;

  &:hover {
    border-color: ${(props) => props.theme.colors.grey};
  }

  ${({ colorizedButton }) =>
    colorizedButton &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      border-color: ${({ theme }) => theme.colors.primary};

      &:hover {
        border-color: ${(props) => props.theme.colors.primary};
      }
    `}
`;
