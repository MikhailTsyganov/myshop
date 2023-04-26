import { FC } from "react";
import { ListItemFooterSecondaryProps } from ".";
import { StyledListItemFooterSecondary } from "./ListItemFooterSecondary.styles";

export const ListItemFooterSecondary: FC<ListItemFooterSecondaryProps> = ({
  item,
}) => {
  const { name } = item;
  return <StyledListItemFooterSecondary>{name}</StyledListItemFooterSecondary>;
};
