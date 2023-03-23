import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GoodsState {
  filter: string;
}

const initialState: GoodsState = {
  filter: "",
};

export const goodsSlice = createSlice({
  name: "goods",
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export default goodsSlice.reducer;
