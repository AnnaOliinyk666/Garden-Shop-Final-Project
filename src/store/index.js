
import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import basketSlice from "./slice/basketSlice";

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        basket: basketSlice
    }  
})