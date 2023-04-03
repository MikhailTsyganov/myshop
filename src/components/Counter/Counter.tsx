import { ButtonCounter, WrapperCounter } from "components";
import React, { FC, useState, useRef, useEffect } from "react";
import { CounterProps } from ".";
import { StyledCounter } from "./Counter.styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export const Counter: FC<CounterProps> = (props) => {
  const { getCounterValue } = props;

  const [value, setValue] = useState(1);

  const decrementEl: any = useRef();

  useEffect(() => {
    const decrementButton = decrementEl.current.children[0];

    value === 1
      ? decrementButton.setAttribute("disabled", "true")
      : decrementButton.removeAttribute("disabled");

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
        ref={decrementEl}
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
