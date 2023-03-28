import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 16px 0 44px;
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
