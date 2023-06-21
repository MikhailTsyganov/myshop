import { FC } from "react";
import { ListItemSearchTypeOfGoodsProps } from ".";
import { StyledListItemSearchTypeOfGoods } from "./ListItemSearchTypeOfGoods.styles";
import { WrapperStandart, ParagraphStandart } from "components";

export const ListItemSearchTypeOfGoods: FC<ListItemSearchTypeOfGoodsProps> = (
  props
) => {
  const { item } = props;
  const { name, parentName } = item;
  return (
    <StyledListItemSearchTypeOfGoods>
      <WrapperStandart>
        <ParagraphStandart className="searchTypeOfGoods_firstName">
          {name}
        </ParagraphStandart>
        {parentName && (
          <ParagraphStandart grey className="searchTypeOfGoods_secondName">
            {parentName}
          </ParagraphStandart>
        )}
      </WrapperStandart>
      <img src="/notFound/notFound.png" alt="" />
    </StyledListItemSearchTypeOfGoods>
  );
};
