/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
