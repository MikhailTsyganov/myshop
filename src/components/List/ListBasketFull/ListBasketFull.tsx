import React, { FC, useState } from "react";
import { ListBasketFullProps, ListItemBasketFullProps } from ".";
import {
  StyledListBasketFull,
  StyledListItemBasketFull,
} from "./ListBasketFull.styles";
import { Counter } from "components";
import { ParagraphFullBasket } from "components/Paragraph/ParagraphFullBasket";

export const ListBasketFull: FC<ListBasketFullProps> = (props) => {
  const { array } = props;
  return (
    <StyledListBasketFull {...props}>
      {array.map((item) => {
        return <ListItemBasketFull item={item} key={item.id} />;
      })}
    </StyledListBasketFull>
  );
};

const ListItemBasketFull: FC<ListItemBasketFullProps> = ({ item }) => {
  const { id, name, price, img, color, country, quantity } = item;

  const [counterValue, setCounterValue] = useState(1);

  const getCounterValue = (value: number) => {
    setCounterValue(value);
  };
  console.log(counterValue);

  return (
    <StyledListItemBasketFull key={id}>
      <img src={img} alt={name} width={96} height={128} />
      <div className="listItemBasketFull_info">
        <ParagraphFullBasket>{name}</ParagraphFullBasket>
        <ParagraphFullBasket grey>
          {color.map((colorItem) => (
            <React.Fragment key={colorItem}>{colorItem}</React.Fragment>
          ))}
        </ParagraphFullBasket>
        <ParagraphFullBasket grey>{country}</ParagraphFullBasket>
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
