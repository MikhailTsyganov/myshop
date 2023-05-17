import { StyledWrapperStandart } from "components/Wrapper/WrapperStandart/WrapperStandart.styles";
import styled from "styled-components";

export const StyledMobileNavMenu = styled(StyledWrapperStandart)`
  position: sticky;
  bottom: 0;
  display: none;
  justify-content: center;
  align-items: center;
  height: 52px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  z-index: 999999;

  & a {
    padding: 12px 0;
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: flex;
  }
`;
