import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { RootState } from ".";

export interface uiState {
  msg: string;
  moodLevel: number;
  anxietyLevel: number;
  energyLevel: number;
  hornyLevel: number;
  socket: any;
}

const initialState: uiState = {
  msg: "hi",
  anxietyLevel: 0,
  energyLevel: 0,
  hornyLevel: 0,
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
    setLevel: (
      state,
      action: PayloadAction<{
        level: "moodLevel" | "anxietyLevel" | "energyLevel" | "hornyLevel";
        value: number;
      }>
    ) => {
      const { level, value } = action.payload;
      state[level] = value;
    },
  },
});

export const { setMsg, setLevel } = uiSlice.actions;
export default uiSlice.reducer;
