import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISidebarReducer {
  isOpenSidebar: boolean;
}

const initialState: ISidebarReducer = {
  isOpenSidebar: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarToggle(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
  },
});

export default sidebarSlice.reducer;
