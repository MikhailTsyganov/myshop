import styled from "styled-components";

interface StyledButtonProps {
  children: React.ReactNode;
}

export const StyledButton = styled.button<StyledButtonProps>`
  height: 53px;
  background-color: inherit;
  border: none;
  cursor: pointer;

  &:last-child {
    margin-left: 36px;
  }

  svg {
    width: 100%;
    height: 27px;
    fill: #fff;
  }

  span {
    color: ${({ theme }) => theme.colors.semitransparent};
  }
`;
