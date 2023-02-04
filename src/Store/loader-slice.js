import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: false,
  },
  reducers: {
    changeLoaderState(state, action) {
      state.loader = action.payload.loader;
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice;
