import { FC } from "react";
import { GoodsItemHomepageProps } from ".";
import { StyledGoodsItemHomepage } from "./GoodsItemHomepage.styles";

export const GoodsItemHomepage: FC<GoodsItemHomepageProps> = ({ item }) => {
  const { name, img, price } = item;

  return (
    <StyledGoodsItemHomepage>
      <img
        width="100%"
        src={process.env.PUBLIC_URL + `/images${img}`}
        alt={name}
      />
      <p>{price}</p>
      <h3>{name}</h3>
    </StyledGoodsItemHomepage>
  );
};
