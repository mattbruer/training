import { configureStore } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import uiReducer from "./uiSlice";
import authReducer from "./authSlice";
import photoReducer from "./photoSlice";
import foodReducer from "./foodSlice";
import newsfeedReducer from "./newsfeedSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer,
    photo: photoReducer,
    food: foodReducer,
    newsfeed: newsfeedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(createLogger({ collapsed: true })),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
