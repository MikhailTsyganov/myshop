export type TGoodsItemHomepage = {
  id: string;
  name: string;
  listSubGood_id: string | null;
  price: number;
  img: string;
  color: string;
  location: string;
  quantity: number;
};

export interface GoodsItemHomepageProps {
  item: TGoodsItemHomepage;
}
