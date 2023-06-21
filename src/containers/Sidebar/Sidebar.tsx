import { FC, useRef, useCallback } from "react";
import { SidebarProps } from ".";

import {
  List,
  ButtonClose,
  ListItemSidebar,
  Backdrop,
  WrapperStandart,
} from "components";
import { WrapperSubListSidebar, StyledSidebar } from "./Sidebar.styles";
import { WrapperSidebar } from "components/Wrapper/WrapperSidebar";
import { useAppDispatch } from "redux/hooks/hooks";
import { sidebarSlice } from "redux/reducers/sidebar-reducer/sidebar-reducer";
import { goodsListApi } from "redux/api/goodsList/goodsList.api";

export const Sidebar: FC<SidebarProps> = ({ goodsList }) => {
  const dispatch = useAppDispatch();
  const { sidebarToggle } = sidebarSlice.actions;

  const [getSubGoodsList, { data: subList }] =
    goodsListApi.useLazyGetSubGoodsListQuery();

  console.log("SIDEBAR DATA:", subList);

  const selectedListItem = useRef<HTMLLIElement>();

  const onHoverListItem = useCallback(
    (id: string, e: React.MouseEvent<HTMLLIElement>) => {
      getSubGoodsList({ id }, true);
      selectedListItem.current?.classList.remove("selectedListItemSidebar");
      selectedListItem.current = e.currentTarget;
      selectedListItem.current.classList.add("selectedListItemSidebar");
    },
    []
  );

  // const onHoverListItem = (id: string, e: React.MouseEvent<HTMLLIElement>) => {
  //   getSubGoodsList({ id }, true);
  //   selectedListItem.current?.classList.remove("selectedListItemSidebar");
  //   selectedListItem.current = e.currentTarget;
  //   selectedListItem.current.classList.add("selectedListItemSidebar");
  // };

  const onCloseSidebar = () => {
    dispatch(sidebarToggle());
    document.querySelector("body")!.classList.remove("body--hidden");
  };

  const onBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onCloseSidebar();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <StyledSidebar>
        <WrapperSidebar>
          {goodsList && (
            <ul>
              {goodsList.map((listItem) => (
                <ListItemSidebar
                  key={listItem.id}
                  item={listItem}
                  onMouseEnter={onHoverListItem}
                ></ListItemSidebar>
              ))}
            </ul>
          )}
        </WrapperSidebar>
        <WrapperStandart display="flex">
          {subList && (
            <>
              <WrapperSubListSidebar>
                <ul>
                  {subList.map((subListItem) => (
                    <ListItemSidebar
                      key={subListItem.id}
                      item={subListItem}
                    ></ListItemSidebar>
                  ))}
                </ul>
              </WrapperSubListSidebar>
              <WrapperSubListSidebar></WrapperSubListSidebar>
            </>
          )}
        </WrapperStandart>
        <ButtonClose onCloseSidebar={onCloseSidebar}></ButtonClose>
      </StyledSidebar>
    </Backdrop>
  );
};
