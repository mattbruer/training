import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";

export interface uiState {
  msg: string;
  moodLevel: number;
  socket: any;
}

const initialState: uiState = {
  msg: "hi",
  moodLevel: 0,
  socket: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setMsg: (state, action: PayloadAction<string>) => {
      state.msg = action.payload;
    },
    setMoodLevel: (state, action: PayloadAction<number>) => {
      state.moodLevel = action.payload;
    },
  },
});

export const { setMsg, setMoodLevel } = uiSlice.actions;
export default uiSlice.reducer;
