export interface ListItemBasketFullProps {
  item: IListItemBasketFull;
}

export interface IListItemBasketFull {
  id: number;
  name: string;
  price: number;
  img: string;
  color: string[];
  location: string;
  quantity: number;
}
