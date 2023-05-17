export type TGoodsItemHomepage = {
  article: number;
  brand: string;
  idGeneral: string;
  name: string;
  previewImage: string;
  price: number;
  id: string;
};

export interface GoodsItemHomepageProps {
  item: TGoodsItemHomepage;
}
