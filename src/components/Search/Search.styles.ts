import styled from "styled-components";

export const StyledSearch = styled.div`
  position: relative;
  width: 100%;

  svg {
    width: 16px;
    height: 16px;
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
    stroke: ${({ theme }) => theme.colors.semitransparent};
    pointer-events: none;

    &.searchOpened_svg {
      stroke: ${({ theme }) => theme.colors.grey};
    }
  }
`;

export const StyledInput = styled.input.attrs({
  type: "text",
  placeholder: "Я ищу...",
})`
  width: 100%;
  height: 56px;

  padding: 16px 44px;
  border: none;
  border-radius: 56px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.semitransparent};
  background-color: ${({ theme }) => theme.colors.searchBackground};
  outline: none;
  transition: background-color 0.3s ease 0s;

  &::placeholder {
    color: ${({ theme }) => theme.colors.semitransparent};
  }

  &.searchOpened {
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: 28px 28px 0 0;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const SearchListWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 8px 4px 13px 8px;
  border-radius: 0 0 28px 28px;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  & .SearchList--upLine {
    &::before {
      content: "";
      display: block;
      height: 1px;
      margin: 8px 12px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  }

  & .searchAdditionalInfo_listItem {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px 10px;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }

    & .searchTypeOfGoods_firstName {
      font-size: 16px;
      margin-bottom: 6px;
    }

    & .searchTypeOfGoods_secondName {
      font-size: 14px;
    }

    & img {
      margin: auto 27px auto 8px;
    }
  }
`;
