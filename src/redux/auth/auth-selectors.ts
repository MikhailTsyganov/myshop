import { RootState } from "../store";

export const getIsLoggedIn = (state: RootState): boolean =>
  state.auth.isLoggedIn;
