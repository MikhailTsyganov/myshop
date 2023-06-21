import styled from "styled-components";

export const StyledListItemSidebar = styled.li`
  display: flex;
  min-height: 28px;
  padding-left: 5px;
  align-items: center;

  font-size: 16px;
  border-radius: 8px;

  cursor: pointer;

  & span {
    width: 100%;
    padding: 3px 5px 3px 44px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &.selectedListItemSidebar {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
  }
`;
