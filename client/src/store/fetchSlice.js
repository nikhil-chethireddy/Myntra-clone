import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name: "fetch",
  initialState: false,
  reducers: {
    fetchDone: (state) => {
      return !state;
    },
  },
});

export const fetchActions = fetchSlice.actions;

export default fetchSlice;
