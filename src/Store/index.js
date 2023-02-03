import { configureStore } from "@reduxjs/toolkit";
import eventSlice from "./event-slice";
import loginSlice from "./login-slice";
import themeReducer from "./theme-slice";
import loaderSlice from "./loader-slice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    event: eventSlice.reducer,
    loader: loaderSlice.reducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
