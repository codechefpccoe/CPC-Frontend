import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: -1,
    username: -1,
    darkTheme: false,
    coins: -1,
  },
  reducers: {
    addLogin(state, action) {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.coins = action.payload.coins;
      state.darkTheme = action.payload.darkTheme;
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice;


