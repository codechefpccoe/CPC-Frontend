import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
  initialState: {
    loader: false,
  },
  reducers: {
    changeLoaderState(state) {
      state.loader = !state.loader;
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice;
