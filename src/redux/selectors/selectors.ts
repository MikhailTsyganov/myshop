import { RootState } from "../store";

export const sidebarToggle = (state: RootState): boolean =>
  state.sidebarReducer.isOpenSidebar;
