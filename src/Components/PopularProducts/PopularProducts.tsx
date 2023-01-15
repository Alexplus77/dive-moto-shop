import { Button } from "antd";
import React from "react";
import { CardProduct } from "../CardProduct";
import s from "./PopularProducts.module.css";

interface ProductItem {
  path: string;
  name: string;
  price: number;
  sale: boolean;
}
interface ITarget {
  target: boolean;
}

export const PopularProducts: React.FC<ITarget> = ({ target }) => {
  const popularNavBar = [
    "запчасти",
    "моторы",
    "шины ",
    "электроника",
    "инструменты",
    "аксессуары ",
  ];
  const products = [
    {
      path: "/Images/products/55a4f760715a1 1.png",
      name: "Спасательный жилет BRP Men's Airflow PFD",
      price: 6900,
      sale: true,
    },
    {
      path: "/Images/products/cq5dam.web.768 1.png",
      name: "Водонепроницаемый Рюкзак",
      price: 9800,
      sale: false,
    },
    {
      path: "/Images/products/s-l225 1.png",
      name: "BRP Audio-Premium System",
      price: 68000,
      sale: false,
    },
    {
      path: "/Images/products/s-l1600 1.png",
      name: "Спасательное снаряжение",
      price: 0,
      sale: true,
    },
  ];

  return (
    <section className={s.popularProducts}>
      <header className={s.headerPopularProducts}>
        <span className={s.headerPopularText}>Популярные товары</span>
        <nav className={s.navBarPopularProducts}>
          {popularNavBar.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </nav>
      </header>
      <div className={s.catalogItemSlider}>
        {products.slice(0, 4).map((item: ProductItem) => (
          <CardProduct {...item} />
        ))}
      </div>
      {target && <Button className={s.btnPopularProduct}>ПОКАЗАТЬ ЕЩЕ</Button>}
    </section>
  );
};
