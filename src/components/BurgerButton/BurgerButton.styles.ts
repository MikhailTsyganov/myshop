import styled from "styled-components";

export const StyledBurgerButton = styled.button`
  position: relative;
  min-width: 48px;
  height: 48px;
  margin-right: 20px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  background-color: inherit;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    border: 1px solid #fff;
  }

  div {
    width: 28px;
    height: 4px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 4px;

    &::after {
      content: "";
      position: absolute;
      top: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 4px;
      background-color: #fff;
      border-radius: 4px;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
      width: 28px;
      height: 4px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 4px;
    }
  }
`;
