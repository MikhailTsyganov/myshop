type TListItemFooterPrimaryListItem = {
  id: number;
  name: string;
};

export interface ListItemFooterPrimaryProps {
  item: { title: string; list: TListItemFooterPrimaryListItem[] };
  narrow?: boolean;
  marginTop?: boolean;
  app?: boolean;
}
