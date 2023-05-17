import axios from "axios";
import $api from "./http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import BASE_URL from "redux/baseURL";
import { RootState } from "redux/store";
import { IUser } from "./auth-slice";

interface ILoginCred {
  email: string;
  password: string;
}

export const login = createAsyncThunk(
  "auth/login",
  async (credentials: ILoginCred) => {
    try {
      const { data } = await $api.post("/login", credentials);
      return data;
    } catch (e) {
      console.log(e);
      // toast.error("User is not defined.");
    }
  }
);

export const registration = createAsyncThunk(
  "auth/registration",
  async (credentials: ILoginCred) => {
    try {
      const { data } = await $api.post("/registration", credentials);
      return data;
    } catch (e) {
      console.log(e);
      // toast.error("User is not defined.");
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    await $api.post("/logout");
  } catch (e) {
    console.log(e);
    // toast.error("User is not defined.");
  }
});

interface IRefresh {
  user: IUser;
  accessToken: string;
  refreshToken: string;
}

export const refresh = createAsyncThunk<IRefresh, void, { state: RootState }>(
  "auth/fetchCurrentUser",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkApi.rejectWithValue("Отмена автоматической авторизации");
    }

    try {
      const { data } = await axios.get(`${BASE_URL}/refresh`, {
        withCredentials: true,
      });
      return data;
    } catch (e) {
      console.log(e);
      // toast.error("User is not defined.");
    }
  }
);
