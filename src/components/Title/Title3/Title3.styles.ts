import styled from "styled-components";

interface ITitle3 {
  margin?: string;
  fSize?: string;
}

export const StyledTitle3 = styled.h3<ITitle3>`
  color: ${(props) => props.color || props.theme.colors.white};
  margin: ${(props) => props.margin || "0 auto"};
  font-size: ${(props) => props.fSize || "18px"};
`;
