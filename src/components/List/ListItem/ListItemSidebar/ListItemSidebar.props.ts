export type TListItemSidebar = {
  id: string;
  name: string;
  path: string;
  parentPath?: string;
};

export interface ListItemSidebarProps {
  item: TListItemSidebar;
  onMouseEnter?: (id: string, e: React.MouseEvent<HTMLLIElement>) => void;
}
