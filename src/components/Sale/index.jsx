import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem";
import s from "./style.module.css";

export default function Sale() {
  const products = useSelector((store) => store.products.list);
  const productsWithDiscount = products
    .filter(({ discont_price }) => discont_price != null)
    .slice(-4);
  return (
    <>
      <h2 className={s.title}>Sale</h2>
      <div className={s.wrapper}>
        {productsWithDiscount.map((item) => (
          <ProductItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
