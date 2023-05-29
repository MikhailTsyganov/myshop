import { StyledWrapperStandart } from "components/Wrapper/WrapperStandart/WrapperStandart.styles";
import styled from "styled-components";

export const StyledAuthForm = styled(StyledWrapperStandart)`
  width: 440px;
  padding: 40px;
  margin: 40px auto;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background-color: red;

  & h1 {
    margin: 0;
    text-align: center;
  }

  & input:not(#authCheckbox) {
    width: 100%;
    height: 52px;
    padding-left: 15px;
    margin-top: 24px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 18px;
  }

  & button {
    width: 100%;
    height: 52px;
    margin-top: 24px;
  }

  & #authCheckbox {
    margin-right: 10px;
  }

  & #authCheckboxWrapper {
    margin-top: 24px;
  }
`;
