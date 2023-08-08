import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface eventState {
  allEvents: {}[];
}

const initialState: eventState = {
  allEvents: [],
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    loadAllEvents: (state, action) => {
      state.allEvents = action.payload;
    },
    addEvent: (state, action) => {
      state.allEvents.push(action.payload);
    },
  },
});

export const { loadAllEvents, addEvent } = eventSlice.actions;
export default eventSlice.reducer;
