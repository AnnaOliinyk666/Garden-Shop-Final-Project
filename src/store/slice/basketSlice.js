import { createSlice } from "@reduxjs/toolkit";

const defaultState = JSON.parse(localStorage.getItem('basket')) ?? [];
const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket));

export const basketSlice = createSlice({
    name: 'basket',
    initialState:{
        list: defaultState
    },
    reducers: {
       basket_decrement(state, {payload}){
        const target = state.list.find(({id}) => id === payload);
        target.count--
    
        if (target.count === 0) {
            state.list = state.list.filter (({id}) => id !== payload)
        } 
        writeToLocalStorage(state.list)
       },
       basket_increment(state, {payload}){
        const target = state.list.find(({id}) => id === payload);
        target.count++
        writeToLocalStorage(state.list)
       },
       basket_add(state, {payload}){
        const target = state.list.find(({id}) => id === payload);
        if (target === undefined) {
            state.list = [...state.list, {id: payload, count:1 }]
            writeToLocalStorage(state.list)
            } else {
                target.count++
                writeToLocalStorage(state.list)
            } 
       },
       basket_remove(state, {payload}){
        state.list = state.list.filter (({id}) => id !== payload)
        writeToLocalStorage(state.list)
       },
       basket_clear(state){
        state.list = []
        writeToLocalStorage([])
       }
    }
})
export const { basket_decrement, basket_increment, basket_add, basket_remove, basket_clear } = basketSlice.actions;
export default basketSlice.reducer;


