import styled from "styled-components";

export const StyledLabel = styled.label`
  position: relative;
  width: 100%;

  svg {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    stroke: ${({ theme }) => theme.colors.semitransparent};
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
  background-color: ${({ theme }) => theme.colors.searchBackground};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semitransparent};
  }
`;
