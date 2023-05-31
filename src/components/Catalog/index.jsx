import React from "react";
import CategorieItem from "../CategorieItem";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function Catalog() {
  const categories = useSelector((store) => store.categories.list);
  return (
    <div>
      <div className={s.block}>
        <h2>Catalog</h2>
        <Link to="/categories">All categories</Link>
      </div>
      <div className={s.wrapper}>
        {categories.map((item) =>
          item.id === 5 ? "" : <CategorieItem key={item.id} {...item} />
        )}
      </div>
    </div>
  );
}
