import styled from "styled-components";

export const StyledSidebar = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  width: fit-content;
`;

export const WrapperSubListSidebar = styled.div`
  width: 285px;
  height: 100%;
  padding: 20px 30px;
  background-color: ${({ theme }) => theme.colors.white};
`;
