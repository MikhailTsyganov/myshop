import { FC, useState } from "react";
import { ListItemFooterPrimaryProps } from ".";
import { StyledListItemFooterPrimary } from "./ListItemFooterPrimary.styles";
import {
  List,
  ListItemFooterSecondary,
  Title2,
  WrapperStandart,
} from "components";
import { useWindowSize } from "hooks/useWindowSize";
import { useTheme } from "styled-components";

import { BsChevronDown, BsChevronUp } from "react-icons/bs";

export const ListItemFooterPrimary: FC<ListItemFooterPrimaryProps> = (
  props
) => {
  const { item } = props;
  const { title, list } = item;

  const [desktopWidth, setDesktopWidth] = useState(false);
  const { width } = useWindowSize();
  const theme = useTheme();

  const showList = () => {
    if (width >= theme.windowSize.desktop) return;
    setDesktopWidth(!desktopWidth);
  };

  return (
    <StyledListItemFooterPrimary
      {...props}
      onClick={showList}
      desktopWidth={desktopWidth}
    >
      <WrapperStandart display="flex" justify="space-between">
        <Title2 white margin="0 0 12px">
          {title}
        </Title2>
        {desktopWidth ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
      </WrapperStandart>
      <List Component={ListItemFooterSecondary} array={list} />
    </StyledListItemFooterPrimary>
  );
};
