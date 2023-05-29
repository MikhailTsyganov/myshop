import styled from "styled-components";

export const StyledStarsRating = styled.div`
  width: 76px;
  margin-right: 12px;

  & ul {
    display: flex;
    justify-content: space-around;
    align-items: center;

    & li {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    & svg {
      width: 12px;
    }

    & .starRating_fill {
      fill: ${({ theme }) => theme.colors.primary};
    }
    & .starRating_half {
      fill: ${({ theme }) => theme.colors.primary};
    }
    & .starRating_empty {
      fill: ${({ theme }) => theme.colors.grey};
    }
  }
`;
