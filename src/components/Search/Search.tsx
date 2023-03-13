import { FC } from "react";
import { SearchProps } from ".";
import { StyledLabel, StyledInput } from "./Search.styles";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";

export const Search: FC<SearchProps> = (props) => {
  return (
    <StyledLabel>
      <HiOutlineMagnifyingGlass />
      <StyledInput />
    </StyledLabel>
  );
};
