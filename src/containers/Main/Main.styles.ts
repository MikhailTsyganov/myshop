import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;

  &::before {
    position: absolute;
    top: -24px;
    content: "";
    display: block;
    width: 100%;
    height: 36px;
    border-radius: 24px 24px 0 0;
    background-color: #fff;
  }
`;
