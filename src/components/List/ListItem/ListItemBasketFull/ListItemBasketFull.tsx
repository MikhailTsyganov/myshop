import React, { FC, useState } from "react";
import { ListItemBasketFullProps } from ".";
import { StyledListItemBasketFull } from "./ListItemBasketFull.styles";

import { Counter } from "components";
import { ParagraphFullBasket } from "components/Paragraph/ParagraphFullBasket";
import { useAppDispatch } from "redux/hooks/hooks";
import { selectedGoodsSlice } from "redux/reducers/selectedGoods-reducer/selectedGoods-reducer";

export const ListItemBasketFull: FC<ListItemBasketFullProps> = ({ item }) => {
  const { info, article, amount } = item;
  const { image, mainInfo } = info;

  const [counterValue, setCounterValue] = useState<number>(amount);

  const { updateOnlyGoodAmount } = selectedGoodsSlice.actions;

  const dispatch = useAppDispatch();
  dispatch(updateOnlyGoodAmount({ article, amount: counterValue }));

  const getCounterValue = (value: number) => {
    setCounterValue(value);
  };
  console.log(counterValue);

  return (
    <StyledListItemBasketFull>
      <img src={image[0].path} alt={mainInfo.name} width={96} height={128} />
      <div className="listItemBasketFull_info">
        <ParagraphFullBasket>{mainInfo.name}</ParagraphFullBasket>
        <ParagraphFullBasket grey>{mainInfo.variantName}</ParagraphFullBasket>
        {/* здесь должен быть location */}
        {/* <ParagraphFullBasket grey>{mainInfo.variantName}</ParagraphFullBasket> */}
      </div>
      <div className="listItemBasketFull_counter">
        <Counter getCounterValue={getCounterValue} count={amount} />
      </div>
      <ParagraphFullBasket className="listItemBasketFull_price">
        {mainInfo.price * counterValue} ₽
      </ParagraphFullBasket>
    </StyledListItemBasketFull>
  );
};
