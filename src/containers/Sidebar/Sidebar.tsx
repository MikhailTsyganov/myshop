import { FC } from "react";
import { SidebarProps } from ".";

import { ListGoods, ButtonClose } from "components";
import { WrapperSidebar } from "components/Wrapper/WrapperSidebar";

export const Sidebar: FC<SidebarProps> = ({ goodsList, onCloseSidebar }) => {
  return (
    <WrapperSidebar>
      <ListGoods array={goodsList} type="sidebar"></ListGoods>

      <ButtonClose onCloseSidebar={onCloseSidebar}></ButtonClose>
    </WrapperSidebar>
  );
};
