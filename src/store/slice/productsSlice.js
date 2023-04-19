import { createSlice } from "@reduxjs/toolkit";

const getPrice = ({newPrice}) => +newPrice;

export const productsSlice = createSlice({
    name: 'products',
    initialState:{
        list: []
    },
    reducers: {
        load(state, { payload }){
            state.list = payload.map(item => (
                {
                ...item, 
                show:true, 
                newPrice: item.discont_price ? item.discont_price : item.price
                }
                ))
        },
        searchFilter(state, { payload }){
            state.list = state.list.map(item => ({
                ...item,
                show: item.title.toLowerCase().startsWith(payload.toLowerCase())
            }));
        },
        resetFilter(state){
            state.list = state.list.map(item => ({
                ...item,
                show: true
            }));
        },
        sortFilter(state, { payload }){
            state.list = [...state.list].sort((a,b) => (payload === 1 ? 1 : -1) * (getPrice(a) - getPrice(b)))
        }
    }
})
export const { load, searchFilter, resetFilter, sortFilter } = productsSlice.actions;
export default productsSlice.reducer;

