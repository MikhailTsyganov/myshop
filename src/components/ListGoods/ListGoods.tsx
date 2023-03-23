import { FC } from "react";
import { ListGoodsProps } from ".";
import { ListGoodsItem } from "../ListGoodsItem";
import { StyledListGoods } from "./ListGoods.styles";

export const ListGoods: FC<ListGoodsProps> = (props) => {
  return (
    <StyledListGoods {...props}>
      {props?.array?.map((item) => (
        <ListGoodsItem item={item} type={props.type} key={item.id} />
      ))}
    </StyledListGoods>
  );
};
