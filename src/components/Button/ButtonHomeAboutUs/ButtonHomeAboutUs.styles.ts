import styled from "styled-components";
import { StyledButtonStandart } from "../ButtonStandart/ButtonStandart.styles";

export const StyledButtonHomeAboutUs = styled(StyledButtonStandart)`
  border: none;
  border-bottom: 1px dashed;
  line-height: 22px;
  text-decoration: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border-color: rgba(203, 17, 171, 0.2);
  display: inline-block;
  margin-top: 12px;
  border-radius: 0;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;
