// import { createStore , combineReducers, applyMiddleware } from 'redux';
// import { categoriesReducer } from './reducer/categoriesReducer';
// import thunk from 'redux-thunk';
// import { productsReducer } from './reducer/productsReducer';
// import { basketReducer } from './reducer/basketReducer';

import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slice/categoriesSlice";
import productsSlice from "./slice/productsSlice";
import basketSlice from "./slice/basketSlice";


// const rootReducer = combineReducers({
//     categories: categoriesReducer,
//     products: productsReducer,
//     basket: basketReducer
//     })
// export const store = createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
    reducer: {
        categories: categoriesSlice,
        products: productsSlice,
        basket: basketSlice
    }  
})