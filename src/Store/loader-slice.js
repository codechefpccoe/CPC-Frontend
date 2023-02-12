import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
  name: "loader",
  initialState: {
    loader: false,
  },
  reducers: {
    changeLoaderStateTrue(state, action) {
      state.loader = true;
    },
    changeLoaderStateFalse(state, action) {
      state.loader = false;
    },
  },
});

export const loaderAction = loaderSlice.actions;
export default loaderSlice;
