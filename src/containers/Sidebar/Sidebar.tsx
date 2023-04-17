import { FC } from "react";
import { SidebarProps } from ".";

import { List, ButtonClose, ListItemSidebar } from "components";
import { WrapperSidebar } from "components/Wrapper/WrapperSidebar";

export const Sidebar: FC<SidebarProps> = ({ goodsList, onCloseSidebar }) => {
  return (
    <WrapperSidebar>
      <List Component={ListItemSidebar} array={goodsList}></List>
      <ButtonClose onCloseSidebar={onCloseSidebar}></ButtonClose>
    </WrapperSidebar>
  );
};
