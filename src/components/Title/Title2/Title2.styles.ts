import styled from "styled-components";

interface ITitle {
  fSize?: string;
}

export const StyledTitle2 = styled.h2<ITitle>`
  color: ${(props) => props.color};
  margin: 0 auto;
  font-size: ${(props) => props.fSize || "20px"};
`;
