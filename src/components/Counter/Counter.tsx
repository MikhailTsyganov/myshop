import { ButtonCounter, WrapperCounter } from "components";
import React, { FC, useState, useEffect } from "react";
import { CounterProps } from ".";
import { StyledCounter } from "./Counter.styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Counter: FC<CounterProps> = (props) => {
  const { getCounterValue, count } = props;

  const [value, setValue] = useState(count);

  useEffect(() => {
    getCounterValue(value);
  }, [value]);

  const onCounterHandler = (e: React.MouseEvent) => {
    switch (e.currentTarget.id) {
      case "increment":
        setValue((prevState) => prevState + 1);
        break;
      case "decrement":
        setValue((prevState) => prevState - 1);
        break;
    }
  };

  return (
    <StyledCounter {...props}>
      <ButtonCounter
        id="decrement"
        onClick={onCounterHandler}
        isDisabled={value === 1}
      >
        <AiOutlineMinus />
      </ButtonCounter>
      <WrapperCounter>{value}</WrapperCounter>
      <ButtonCounter id="increment" onClick={onCounterHandler}>
        <AiOutlinePlus />
      </ButtonCounter>
    </StyledCounter>
  );
};
