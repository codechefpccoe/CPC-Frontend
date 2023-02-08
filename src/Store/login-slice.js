import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    name: "",
    username: "",
    coins: -1,
    email: "",
    isLogin: false,
  },
  reducers: {
    addLogin(state, action) {
      state.name = action.payload.name;
      state.username = action.payload.username;
      state.coins = action.payload.coins;
      state.email = action.payload.email;
      state.isLogin = true;
    },
    logout(state) {
      state.name = "";
      state.username = "";
      state.coins = -1;
      state.email = "";
      state.isLogin = false;
    },
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice;
