import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import s from "./style.module.css";
import { basket_add } from "../../store/slice/basketSlice";

export default function SinglPoductPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productsAll = useSelector((state) => state.products.list).length;
  const product = useSelector((state) =>
    state.products.list.find((prod) => prod.id === +id)
  );

  if (+id > productsAll || +id < 1) {
    return window.location.replace("http://localhost:3000/error");
  }

  const URL = "http://localhost:3333/";
  return (
    <>
      {product === undefined ? (
        <p>LOADING ...</p>
      ) : (
        <div>
          <h2 className={s.title}>{product.title}</h2>
          <div className={s.wrapper}>
            <img src={`${URL}${product.image}`} alt={product.title} />
            <div>
              <div>
                {product.discont_price !== null ? (
                  <div className={s.price_block}>
                    <p className={s.price}>
                      {product.discont_price} <span>$</span>
                    </p>
                    <p className={s.old_price}>{product.price}$</p>
                    <p className={s.percent}>
                      -
                      {(
                        100 -
                        (product.discont_price / product.price) * 100
                      ).toFixed(2)}{" "}
                      <span>%</span>
                    </p>
                  </div>
                ) : (
                  <p className={s.price}>
                    {product.price}
                    <span>$</span>
                  </p>
                )}
              </div>
              <button
                className={s.btn}
                onClick={() => {
                  dispatch(basket_add(+id));
                }}
              >
                To cart
              </button>
              <p className={s.descr_title}>Description</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
