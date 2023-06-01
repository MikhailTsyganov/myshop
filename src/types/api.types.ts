import { TGoodsItemHomepage } from "components";

// goods.api

export interface TGetAllGoodsBody {
  page: number;
  limit: number;
}

export interface IGetAllGoods {
  goods: TGoodsItemHomepage[];
  total: number;
}

// goodsDetails.api

export interface IGoodsDetailsParameters {
  article: string | undefined;
  fetchBigImages: boolean;
}

export interface IGoodsDetailsImage {
  id: string;
  "parent_goods-variant_id": string;
  path: string;
  size: string;
}

export interface IGoodDetailsMainInfo {
  id: string;
  sold: number;
  price: number;
  name: string;
  brand: string;
  rating: number;
  description: string;
  variantName: string;
}

export interface IGoodDetailsVariants {
  article: string;
  imageId: string;
  path: string;
  variantId: string;
}

export interface IGoodDetailsAdditionalInformationInner {
  id: string;
  rowId: string;
  rowName: string;
  titleId: string;
  titleName: string;
  value: string;
}

interface IGoodDetailsAdditionalInformation {
  title: string;
  rows: IGoodDetailsAdditionalInformationInner[];
}

export interface IGetGoodDetails {
  mainInfo: IGoodDetailsMainInfo;
  bigImages: IGoodsDetailsImage[];
  mediumImages: IGoodsDetailsImage[];
  smallImages: IGoodsDetailsImage[];
  videos: { id: string; path: string }[];
  variants: IGoodDetailsVariants[];
  additionalInformation: IGoodDetailsAdditionalInformation[];
}
