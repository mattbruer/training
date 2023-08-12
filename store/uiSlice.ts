import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Socket } from "socket.io-client";
import { RootState } from ".";

type mood = {
  moodLevel: number;
  anxietyLevel: number;
  energyLevel: number;
  stressLevel: number;
};
export interface uiState {
  msg: string;
  moodLevel: number;
  anxietyLevel: number;
  energyLevel: number;
  stressLevel: number;
  matt: mood;
  shanna: mood;
}

const initialState: uiState = {
  msg: "hi",
  anxietyLevel: 0,
  energyLevel: 0,
  stressLevel: 0,
  moodLevel: 0,
  matt: { moodLevel: 0, anxietyLevel: 0, energyLevel: 0, stressLevel: 0 },
  shanna: { moodLevel: 0, anxietyLevel: 0, energyLevel: 0, stressLevel: 0 },
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
        level: "moodLevel" | "anxietyLevel" | "energyLevel" | "stressLevel";
        value: number;
      }>
    ) => {
      const { level, value } = action.payload;
      state[level] = value;
    },
    registerMood: (
      state,
      action: PayloadAction<{
        user: { name: "matt" | "shanna" };
        newMood: mood;
      }>
    ) => {
      const { name } = action.payload.user;
      state[name] = action.payload.newMood;
    },
  },
});

export const { setMsg, setLevel, registerMood } = uiSlice.actions;
export default uiSlice.reducer;
