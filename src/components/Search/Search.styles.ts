import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  width: 100%;
  margin-left: 20px;
  margin-right: 50px;

  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    stroke: rgba(255, 255, 255, 0.5);
    pointer-events: none;
  }
`;

export const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Я ищу...",
})`
  width: 100%;
  height: 56px;

  padding: 16px 44px;
  border: none;
  border-radius: 56px;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.2);
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;
