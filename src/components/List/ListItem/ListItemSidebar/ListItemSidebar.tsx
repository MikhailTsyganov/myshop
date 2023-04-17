import { FC } from "react";
import { ListItemSidebarProps } from ".";
import { StyledListItemSidebar } from "./ListItemSidebar.styles";

export const ListItemSidebar: FC<ListItemSidebarProps> = ({ item }) => {
  const { name } = item;
  return <StyledListItemSidebar>{name}</StyledListItemSidebar>;
};
