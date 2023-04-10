export interface GoodsItemHomepageProps {
  item: {
    id: string | number;
    name: string;
    listSubGood_id: string | null;
    price: number;
    quantity: number;
    location: string;
    color: string;
    img: string;
  };
}
