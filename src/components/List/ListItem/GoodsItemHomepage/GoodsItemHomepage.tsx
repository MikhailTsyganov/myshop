import { FC } from "react";
import { GoodsItemHomepageProps } from ".";
import { StyledGoodsItemHomepage } from "./GoodsItemHomepage.styles";
import { Title2, ParagraphStandart } from "components";
import { Link } from "react-router-dom";

export const GoodsItemHomepage: FC<GoodsItemHomepageProps> = ({ item }) => {
  const { article, brand, name, previewImage, price } = item;

  return (
    <Link to={`/goodDetails/${article}`}>
      <StyledGoodsItemHomepage>
        <article>
          <img width="100%" src={previewImage} alt={name} />
          <ParagraphStandart>{price} ₽</ParagraphStandart>
          <Title2>
            <span>{brand}</span> / {name}
          </Title2>
        </article>
      </StyledGoodsItemHomepage>
    </Link>
  );
};
