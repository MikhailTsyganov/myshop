export interface ListBasketFullProps {
  array: IListItemBasketFull[];
}

export interface ListItemBasketFullProps {
  item: IListItemBasketFull;
}

export interface IListItemBasketFull {
  id: number;
  name: string;
  price: number;
  img: string;
  color: string[];
  country: string;
  quantity: number;
}
