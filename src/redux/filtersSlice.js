import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const filtersSlice = createSlice({
  name: "numbers",
  initialState: initialState,
  reducers: {
    filterNumbers: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterNumbers } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;
