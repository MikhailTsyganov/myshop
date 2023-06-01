import { RootState } from "../store";
import { selectedGoodsInitialState } from "redux/reducers/selectedGoods-reducer/selectedGoods-reducer";

export const sidebarToggle = (state: RootState): boolean =>
  state.sidebarReducer.isOpenSidebar;

export const selectedGoods = (state: RootState): selectedGoodsInitialState =>
  state.selectedGoods;
