import { createStore , combineReducers, applyMiddleware } from 'redux';
import { categoriesReducer } from './reducer/categoriesReducer';
import thunk from 'redux-thunk';
import { productsReducer } from './reducer/productsReducer';
import { basketReducer } from './reducer/basketReducer';


const rootReducer = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    basket: basketReducer
    })
export const store = createStore(rootReducer, applyMiddleware(thunk));