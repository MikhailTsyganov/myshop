import styled from "styled-components";

export const StyledListItemSearchFavorites = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 6px 36px 8px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
`;
