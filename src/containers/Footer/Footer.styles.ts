import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: relative;
  padding: 68px 0 48px;
  margin: 48px 0 0;
  background-color: #481173;

  &::before {
    position: absolute;
    top: 0;
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 0 0 24px 24px;
    background-color: #fff;
  }
`;
