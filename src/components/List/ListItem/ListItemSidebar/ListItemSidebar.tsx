import { FC } from "react";
import { ListItemSidebarProps } from ".";
import { StyledListItemSidebar } from "./ListItemSidebar.styles";
import { goodsListApi } from "redux/api/goodsList/goodsList.api";

export const ListItemSidebar: FC<ListItemSidebarProps> = (props) => {
  const { item } = props;
  const { name } = item;

  const [getSubGoodsList, { data }] =
    goodsListApi.useLazyGetSubGoodsListQuery();

  const onHoverListItem = (e: React.MouseEvent<HTMLLIElement>) => {
    getSubGoodsList({ id: item.id });
  };

  console.log(data);

  return (
    <StyledListItemSidebar {...props} onMouseEnter={onHoverListItem}>
      {name}
    </StyledListItemSidebar>
  );
};
