import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./event-slice";
import loginSlice from "./login-slice";
import themeReducer from "./theme-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    event: eventSlice.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
