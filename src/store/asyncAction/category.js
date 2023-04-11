
import { categoriesLoadAction } from "../reducer/categoriesReducer";

const categoryURL = 'http://localhost:3333/categories/all';


export const asynkLoadCategoriesAction = async (dispatch) => {
const resp = await fetch (categoryURL);
const data = await resp.json();


dispatch(categoriesLoadAction(data))
}