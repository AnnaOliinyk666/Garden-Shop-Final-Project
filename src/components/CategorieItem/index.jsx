import React from "react";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export default function CategorieItem({ id, image, title }) {
  const URL = "http://localhost:3333/";
  return (
    <div className={s.wrapper}>
      <Link to={`/products/categories/${id}`}>
        <img className={s.img} src={`${URL}${image}`} alt={title} />
        <p>{title}</p>
      </Link>
    </div>
  );
}
