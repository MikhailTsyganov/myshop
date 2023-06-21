import { FC } from "react";
import { ListItemSearchFavoritesProps } from ".";
import { StyledListItemSearchFavorites } from "./ListItemSearchFavorites.styles";
import { ParagraphStandart } from "components/Paragraph";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const ListItemSearchFavorites: FC<ListItemSearchFavoritesProps> = (
  props
) => {
  const { item } = props;
  const { name } = item;
  return (
    <StyledListItemSearchFavorites>
      <HiOutlineMagnifyingGlass className="searchOpened_svg"></HiOutlineMagnifyingGlass>
      <ParagraphStandart>{name}</ParagraphStandart>
    </StyledListItemSearchFavorites>
  );
};
