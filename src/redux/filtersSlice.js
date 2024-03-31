import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterList: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterList } = filtersSlice.actions;
export default filtersSlice.reducer;
