import "./style.scss";
import { Card } from "../Card/Card";
import { useEffect, useState } from "react";
// import { getPosts } from "../../api/getPosts";

export function Products({ count, setCount }) {
  const incrimrntCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Товары</h1>

      <div className="product__list">
        <div className="product__item">
          <div className="product__img">
            <img
              src="https://img-fotki.yandex.ru/get/893904/194398330.18d/0_222b8c_ba0aaacb_XL.jpg"
              alt=""
            />
          </div>
          <div>
            <button onClick={decrementCount}>-</button>
            <span>Купить</span>
            <button onClick={incrimrntCount}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
