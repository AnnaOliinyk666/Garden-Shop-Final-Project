import React from "react";
import error from "./error.png";
import s from "./style.module.css";

export default function ErrorPage() {
  return (
    <div>
      <img className={s.img} src={error} alt={error} />
    </div>
  );
}
