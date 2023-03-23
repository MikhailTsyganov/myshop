export interface ListGoodsProps {
  array: {
    id: number;
    img?: string;
    name: string;
    price?: number;
  }[];

  type?: string;
  // children?: React.ReactNode;
}
