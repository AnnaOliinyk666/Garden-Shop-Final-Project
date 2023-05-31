import { Route, Routes } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HomePage from "../../pages/HomePage";
import ProductsPage from "../../pages/ProductsPage";
import CategoriesPage from "../../pages/CategoriesPage";
import SinglPoductPage from "../../pages/SinglPoductPage";
import BasketPage from "../../pages/BasketPage";
import s from "./style.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { asynkLoadCategoriesAction } from "../../store/asyncAction/category";
import { asynkLoadProductsAction } from "../../store/asyncAction/products";
import ErrorPage from "../../pages/ErrorPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynkLoadCategoriesAction);
    dispatch(asynkLoadProductsAction);
  }, []);
  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/all" element={<ProductsPage />} />
        <Route path="/products/categories/:id" element={<ProductsPage />} />
        <Route path="/products/:sale" element={<ProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/product/:id" element={<SinglPoductPage />} />
        <Route path="/basket" element={<BasketPage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
