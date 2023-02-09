import { Button } from "antd";
import React from "react";
import { CardProduct } from "../CardProduct";
import s from "./PopularProducts.module.css";
import { IProductItem } from "../../Types/types";
import { useAppSelector } from "../../Hooks/reduxHooks";

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
  const products = useAppSelector((state) => state.productsData.productsItem);

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
        {products.slice(0, 4).map((item: IProductItem) => (
          <CardProduct key={item.name} item={item} />
        ))}
      </div>
      {target && <Button className={s.btnPopularProduct}>ПОКАЗАТЬ ЕЩЕ</Button>}
    </section>
  );
};
