import React, { FC, useState } from "react";
import { ListItemBasketFullProps } from ".";
import { StyledListItemBasketFull } from "./ListItemBasketFull.styles";

import { Counter } from "components";
import { ParagraphFullBasket } from "components/Paragraph/ParagraphFullBasket";

export const ListItemBasketFull: FC<ListItemBasketFullProps> = ({ item }) => {
  const { id, name, price, img, color, location, quantity } = item;

  const [counterValue, setCounterValue] = useState(1);

  const getCounterValue = (value: number) => {
    setCounterValue(value);
  };

  return (
    <StyledListItemBasketFull>
      <img src={img} alt={name} width={96} height={128} />
      <div className="listItemBasketFull_info">
        <ParagraphFullBasket>{name}</ParagraphFullBasket>
        <ParagraphFullBasket grey>
          {color.map((colorItem) => (
            <React.Fragment key={colorItem}>{colorItem}</React.Fragment>
          ))}
        </ParagraphFullBasket>
        <ParagraphFullBasket grey>{location}</ParagraphFullBasket>
      </div>
      <div className="listItemBasketFull_counter">
        <Counter getCounterValue={getCounterValue} />
      </div>
      <ParagraphFullBasket className="listItemBasketFull_price">
        {price * counterValue} ₽
      </ParagraphFullBasket>
    </StyledListItemBasketFull>
  );
};
