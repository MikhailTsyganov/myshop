import { FC } from "react";
import { ListGoodsItemProps } from ".";
import { StyledListGoodsItem } from "./ListGoodsItem.styles";

export const ListGoodsItem: FC<ListGoodsItemProps> = (props) => {
  const { type, item } = props;
  return (
    <StyledListGoodsItem {...props}>
      {type === "main" && (
        <>
          <img width="100%" src={item.img} alt={item.name} />
          <p>{item.price}</p>
          <h3>{item.name}</h3>
        </>
      )}
      {type !== "main" && <>{item.name}</>}
    </StyledListGoodsItem>
  );
};
