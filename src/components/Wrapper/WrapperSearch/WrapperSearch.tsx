import { FC } from "react";
import { WrapperSearchProps } from ".";
import { StyledWrapperSearch } from "./WrapperSearch.styles";

export const WrapperSearch: FC<WrapperSearchProps> = (props) => {
  return <StyledWrapperSearch {...props}></StyledWrapperSearch>;
};
