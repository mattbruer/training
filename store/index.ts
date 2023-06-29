import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger({ collapsed: true })),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
