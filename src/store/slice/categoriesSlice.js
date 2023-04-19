import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState:{
        list: []
    },
    reducers: {
       load(state, {payload}){
            state.list = payload;
       }
    }
})
export const {load} = categoriesSlice.actions;
export default categoriesSlice.reducer;

