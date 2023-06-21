import { FC, useState, useEffect } from "react";
import { SearchProps } from ".";
import { StyledSearch, StyledInput, SearchListWrapper } from "./Search.styles";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { useAppDispatch, useAppSelector } from "redux/hooks/hooks";
import { goodsSlice } from "redux/reducers/goods-reducer";
import {
  List,
  ListItemSearchFavorites,
  ListItemSearchTypeOfGoods,
} from "components/List";
import { searchApi } from "redux/api/search/search.api";
import debounce from "lodash.debounce";
import { IGetSearchFavorites } from "types/api.types";
import useDebounce from "hooks/useDebounce";
import { ListItemSearchBrands } from "components/List/ListItem/ListItemSearchBrands";
// var debounce = require('lodash.debounce');

export const Search: FC<SearchProps> = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchOpened, setSearchOpened] = useState(false);
  const [filtredFavorites, setFiltredFavorites] =
    useState<IGetSearchFavorites[]>();

  const debouncedInputValue = useDebounce(inputValue, 300);

  const { data: searchFavorites, isSuccess } =
    searchApi.useGetSearchFavoritesQuery("");

  const [getSearchTypesOfGoods, { data: searchAdditionalInfo }] =
    searchApi.useLazyGetSearchAdditionalInfoQuery();
  // console.log(searchAdditionalInfo);

  useEffect(() => {
    if (isSuccess && searchFavorites) {
      setFiltredFavorites(searchFavorites);
    }
  }, [searchFavorites]);

  useEffect(() => {
    const filtredArray = searchFavorites?.filter((item) =>
      item.name.includes(inputValue)
    );

    setFiltredFavorites(filtredArray);

    if (inputValue !== "") {
      getSearchTypesOfGoods(inputValue);
    }
  }, [debouncedInputValue]);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onFocusInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setSearchOpened(true);
  };
  const onBlurInput = (e: React.FocusEvent<HTMLInputElement>) => {
    setSearchOpened(false);
  };

  return (
    <StyledSearch>
      <HiOutlineMagnifyingGlass
        className={`${searchOpened ? "searchOpened_svg" : ""}`}
      />
      <StyledInput
        value={inputValue}
        onChange={inputHandler}
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        className={`${searchOpened ? "searchOpened" : ""}`}
      />
      {searchOpened && (
        <SearchListWrapper>
          {filtredFavorites && (
            <List
              Component={ListItemSearchFavorites}
              array={filtredFavorites}
            ></List>
          )}

          {inputValue !== "" && searchAdditionalInfo?.typeOfGoods && (
            <>
              <List
                Component={ListItemSearchTypeOfGoods}
                array={searchAdditionalInfo.typeOfGoods}
                className="SearchList--upLine"
              />
              <List
                Component={ListItemSearchBrands}
                array={searchAdditionalInfo.brands}
                className="SearchList--upLine"
              />
            </>
          )}
        </SearchListWrapper>
      )}
    </StyledSearch>
  );
};
