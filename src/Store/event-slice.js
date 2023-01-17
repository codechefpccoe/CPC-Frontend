import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    name: -1,
    description: -1,
    posterURL: -1,
    date: -1,
  },
  reducers: {
    addEvents(state, action) {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.posterURL = action.payload.posterURL;
      state.date = action.payload.date;
    },
  },
});

export const eventAction = eventSlice.actions;
export default eventSlice;
