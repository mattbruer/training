import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface nameState {}

const initialState: nameState = {};

const nameSlice = createSlice({
  name: "name",
  initialState,
  reducers: {},
});

export const {} = nameSlice.actions;
export default nameSlice.reducer;
