import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGoodsDetailsImage, IGoodDetailsMainInfo } from "types/api.types";

export interface ISelectedGoods {
  id: string;
  article: string;
  info: {
    mainInfo: IGoodDetailsMainInfo;
    image: IGoodsDetailsImage[];
  };
  amount: number;
}

export type selectedGoodsInitialState = ISelectedGoods[];

type payloadFullObject = Omit<ISelectedGoods, "amount">;

type payloadCroppedObject = Pick<ISelectedGoods, "article" | "amount">;

const initialState: selectedGoodsInitialState = [];

export const selectedGoodsSlice = createSlice({
  name: "selectedGoods",
  initialState,
  reducers: {
    addGood(state, action: PayloadAction<payloadFullObject>) {
      const hasIndex = state.findIndex(
        (oneSelectedGood) => oneSelectedGood.article === action.payload.article
      );

      hasIndex === -1
        ? state.push({ ...action.payload, amount: 1 })
        : (state[hasIndex].amount += 1);
    },

    updateOnlyGoodAmount(state, action: PayloadAction<payloadCroppedObject>) {
      const hasIndex = state.findIndex(
        (oneSelectedGood) => oneSelectedGood.article === action.payload.article
      );
      if (hasIndex === -1) {
        return;
      }

      state[hasIndex].amount = action.payload.amount;
    },
  },
});

export default selectedGoodsSlice.reducer;
