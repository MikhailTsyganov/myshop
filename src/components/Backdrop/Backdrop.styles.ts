import styled from "styled-components";

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.colors.backdrop};
  z-index: 9999999999999;

  body {
    overflow-y: hidden;
  }
`;
