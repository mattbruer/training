import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type NF = {
  id: string;
  name: string;
  thumb: string;
  caption: string;
  url: string;
};

export interface newsfeedState {
  allItems: NF[];
}

const initialState: newsfeedState = {
  allItems: [],
};

const newsfeedSlice = createSlice({
  name: "newsfeed",
  initialState,
  reducers: {
    loadItems: (state, action) => {
      state.allItems = action.payload;
    },
    addToNewsfeed: (state, action) => {
      state.allItems.push(action.payload);
    },
  },
});

export const { addToNewsfeed, loadItems } = newsfeedSlice.actions;
export default newsfeedSlice.reducer;
