import { Card } from "antd";
import React from "react";
import { IProductItem } from "../../Types/types";
import s from "./CardProduct.module.css";

interface IProps {
  item: IProductItem;
}
export const CardProduct = ({ item }: IProps) => {
  return (
    <Card
      key={item.name}
      className={s.productCard}
      bordered
      hoverable
      style={{ width: 240 }}
    >
      <header className={s.containerHeader}>
        {item.sale && <span className={s.sale}>SALE</span>}
        <img
          className={s.imgLikeProduct}
          alt={"#"}
          src={"/Images/icons/likeProduct.svg"}
        />
      </header>
      <img className={s.imageCard} alt="example" src={item.path} />
      <div key={item.name} className={s.containerCardContent}>
        <span className={s.productName}>{item.name}</span>
        {item.price ? (
          <span className={s.price}>{item.price} ₽</span>
        ) : (
          <div className={s.outOfStockContainer}>
            <span className={s.outOfStock}>Нет в наличии</span>
            <a href={"..."} className={s.outOfStockMessage}>
              Сообщить о прибытии
            </a>
          </div>
        )}
      </div>
      {!!item.price && (
        <footer className={s.iconCartContainer}>
          <img
            className={s.iconCart}
            alt={"#"}
            src={"/Images/icons/iconCart.png"}
          />
        </footer>
      )}
    </Card>
  );
};
