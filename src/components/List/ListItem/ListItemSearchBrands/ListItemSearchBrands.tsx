import { FC } from "react";
import { ListItemSearchBrandsProps } from ".";
import { StyledListItemSearchBrands } from "./ListItemSearchBrands.styles";
import { WrapperStandart, ParagraphStandart } from "components";

export const ListItemSearchBrands: FC<ListItemSearchBrandsProps> = (props) => {
  const { item } = props;
  const { name, img } = item;
  return (
    <StyledListItemSearchBrands {...props}>
      <WrapperStandart>
        <ParagraphStandart className="searchTypeOfGoods_firstName">
          {name}
        </ParagraphStandart>

        <ParagraphStandart grey className="searchTypeOfGoods_secondName">
          бренд
        </ParagraphStandart>
      </WrapperStandart>
      <img src={img} alt={name} />
    </StyledListItemSearchBrands>
  );
};
