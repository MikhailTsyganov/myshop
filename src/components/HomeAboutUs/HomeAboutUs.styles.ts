import styled from "styled-components";

export const StyledHomeAboutUs = styled.section`
  margin-top: 72px;
  h2,
  h3 {
    margin-bottom: 20px;
  }

  p {
    font-size: 16px;
    line-height: 22px;
    color: ${({ theme }) => theme.colors.grey};
  }

  p:not(last-child) {
    margin-bottom: 20px;
  }

  @media ${({ theme }) => theme.media.sm} {
    display: none;
  }
`;
