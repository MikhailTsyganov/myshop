export type TListItemBasketFull = {
  id: number;
  name: string;
  price: number;
  img: string;
  color: string[];
  location: string;
  quantity: number;
};

export interface ListItemBasketFullProps {
  item: TListItemBasketFull;
}
