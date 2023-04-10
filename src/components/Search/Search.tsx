import { FC } from "react";
import { SearchProps } from ".";
import { StyledLabel, StyledInput } from "./Search.styles";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { goodsSlice } from "redux/reducers/goods-reducer";

// import { useState } from "react";

export const Search: FC<SearchProps> = () => {
  // const [value, setValue] = useState("");

  const { filter } = useAppSelector((state) => state.goodsReducer);
  const { changeFilter } = goodsSlice.actions;
  const dispatch = useAppDispatch();

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setValue(e.target.value);
    dispatch(changeFilter(e.target.value));
  };

  return (
    <StyledLabel>
      <HiOutlineMagnifyingGlass />
      <StyledInput value={filter} onChange={inputHandler} />
    </StyledLabel>
  );
};
