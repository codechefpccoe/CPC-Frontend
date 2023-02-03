import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: -1,
    username: -1,
    coins: -1,
    email : -1

  },
  reducers: {
    addLogin(state, action) {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.coins = action.payload.coins;
      state.email = action.payload.email;
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice;


