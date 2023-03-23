import styled from "styled-components";

interface StyledHeaderProps {
  height?: string;
}

export const StyledHeader = styled.header<StyledHeaderProps>`
  height: ${(props) => props.height};
  padding-top: 16px;
  background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.primary} 0,
      ${({ theme }) => theme.colors.secondary} 100%
    )
    no-repeat;
`;

/* .logo {
  display: block;
  width: 240px;
  height: 60px;
  background-color: red;
} */
