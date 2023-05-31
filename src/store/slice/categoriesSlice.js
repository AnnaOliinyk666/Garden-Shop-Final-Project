import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {
    load(state, { payload }) {
      state.list = payload;
    },
    this_category(state, { payload }) {
      state.list = state.list.find((item) => item.id === +payload);
    },
    reset_category(state) {
      return state;
    },
  },
});
export const { load, this_category, reset_category } = categoriesSlice.actions;
export default categoriesSlice.reducer;
