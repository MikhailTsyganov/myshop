import { FC } from "react";
import { SidebarProps } from ".";

import { List, ButtonClose, ListItemSidebar, Backdrop } from "components";
import { WrapperSidebar } from "components/Wrapper/WrapperSidebar";
import { useAppDispatch } from "redux/hooks/hooks";
import { sidebarSlice } from "redux/reducers/sidebar-reducer/sidebar-reducer";

export const Sidebar: FC<SidebarProps> = ({ goodsList }) => {
  const dispatch = useAppDispatch();
  const { sidebarToggle } = sidebarSlice.actions;

  const onCloseSidebar = () => {
    dispatch(sidebarToggle());
  };

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onCloseSidebar();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <WrapperSidebar>
        <List Component={ListItemSidebar} array={goodsList}></List>
        <ButtonClose onCloseSidebar={onCloseSidebar}></ButtonClose>
      </WrapperSidebar>
    </Backdrop>
  );
};
