// import { productsLoadAction } from "../reducer/productsReducer";
import { load } from "../slice/productsSlice";

const productsURL = 'http://localhost:3333/products/all';

export const asynkLoadProductsAction = async (dispatch) => {
    const resp = await fetch (productsURL);
    const data = await resp.json();
   
    
    dispatch(load(data))
    }

    