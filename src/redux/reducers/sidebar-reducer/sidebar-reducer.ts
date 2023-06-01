import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISidebarReducer {
  isOpenSidebar: boolean;
  selectedListItem: string;
}

const initialState: ISidebarReducer = {
  isOpenSidebar: false,
  selectedListItem: "",
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    sidebarToggle(state) {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    selectedListItem(state, action) {
      state.selectedListItem = action.payload;
    },
  },
});

export default sidebarSlice.reducer;
