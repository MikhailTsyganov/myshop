export type TListItemSidebar = {
  id: string;
  name: string;
  path: string;
};

export interface ListItemSidebarProps {
  item: TListItemSidebar;
  // onMouseEnter?: (e: React.MouseEvent<HTMLLIElement>) => void;
  // isHoverListItem: (id: string) => void;
}
