import { FC } from "react";
import { GoodsItemHomepageProps } from ".";
import { StyledGoodsItemHomepage } from "./GoodsItemHomepage.styles";

export const GoodsItemHomepage: FC<GoodsItemHomepageProps> = (props) => {
  const { item } = props;
  return (
    <StyledGoodsItemHomepage {...props}>
      <img width="100%" src={item.img} alt={item.name} />
      <p>{item.price}</p>
      <h3>{item.name}</h3>
    </StyledGoodsItemHomepage>
  );
};
