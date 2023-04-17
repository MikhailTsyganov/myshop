import styled from "styled-components";

export const StyledListItemSidebar = styled.li`
  display: flex;
  height: 28px;
  padding-left: 5px;
  align-items: center;

  font-size: 16px;
  border-radius: 8px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
