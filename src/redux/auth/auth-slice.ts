import { createSlice } from "@reduxjs/toolkit";
import { login, registration, logout, refresh } from "./auth-operations";

export interface IUser {
  id: string | null;
  email: string | null;
  isActivated: boolean;
}

interface IInitialState {
  user: IUser;
  token: string | null;
  isLoggedIn: boolean;
  // isFetchingCurrentUser: boolean;
}

const initialState: IInitialState = {
  user: { id: null, email: null, isActivated: false },
  token: null,
  isLoggedIn: false,
  // isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    });
    builder.addCase(registration.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = { id: null, email: null, isActivated: false };
      state.token = null;
      state.isLoggedIn = false;
    });
    builder.addCase(refresh.fulfilled, (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.accessToken;
      state.isLoggedIn = true;
    });
    // builder.addCase(refresh.rejected, (state) => {
    //   state.user = { id: null, email: null, isActivated: false };
    //   state.token = null;
    //   state.isLoggedIn = false;
    // });
  },
});

export default authSlice.reducer;
