import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkTheme: false };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme(state) {
      if (state.darkTheme !== true) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
