import { FC, useState } from "react";
import { SidebarProps } from ".";

import { List, ButtonClose, ListItemSidebar, Backdrop } from "components";
import { WrapperSidebar } from "components/Wrapper/WrapperSidebar";
import { useAppDispatch } from "redux/hooks/hooks";
import { sidebarSlice } from "redux/reducers/sidebar-reducer/sidebar-reducer";

export const Sidebar: FC<SidebarProps> = ({ goodsList }) => {
  const dispatch = useAppDispatch();
  const { sidebarToggle } = sidebarSlice.actions;
  const [showSublist, setShowSublist] = useState(false);

  const onCloseSidebar = () => {
    dispatch(sidebarToggle());
  };

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onCloseSidebar();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <WrapperSidebar>
        {goodsList && (
          <ul>
            {goodsList.map((listItem) => (
              <ListItemSidebar
                key={listItem.id}
                item={listItem}
              ></ListItemSidebar>
            ))}
          </ul>
        )}
        {/* <List Component={ListItemSidebar} array={goodsList}></List> */}
        {showSublist && <div></div>}
        <ButtonClose onCloseSidebar={onCloseSidebar}></ButtonClose>
      </WrapperSidebar>
    </Backdrop>
  );
};
