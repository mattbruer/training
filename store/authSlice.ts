import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface authState {
  user: { name: string; id: number } | null;
}

const initialState: authState = {
  user: null,
};

export const me = createAsyncThunk<any, void>(
  "auth/me",
  async (_, thunkAPI) => {
    const token = window.localStorage.getItem("token");

    if (token) {
      const res = await axios.get("http://localhost:8080/api/auth/me", {
        headers: {
          authorization: token,
        },
      });

      return thunkAPI.dispatch(setAuth(res.data));
    }
  }
);

export const authenticate = createAsyncThunk<any, any>(
  "auth/authenticate",
  async (formVals: { name: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8080/api/auth/login",
        formVals
      );
      window.localStorage.setItem("token", data.token);
      thunkAPI.dispatch(me());
    } catch (error) {}
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.user = action.payload;
    },

    logout: (state, action) => {
      window.localStorage.setItem("token", action.payload);
      state.user = null;
    },
  },
});

export const { setAuth, logout } = authSlice.actions;
export default authSlice.reducer;
