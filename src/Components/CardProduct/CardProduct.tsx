import { Card } from "antd";
import React, { useState } from "react";
import { IProductItem } from "../../Types/types";
import s from "./CardProduct.module.css";
import { useNavigate, useLocation, useParams } from "react-router-dom";

interface IProps {
  item: IProductItem;
}
export const CardProduct = ({ item }: IProps) => {
  const location = useLocation();
  const { name } = useParams();
  const navigate = useNavigate();
  const [onMouseCursor, setOnMouse] = useState<boolean>(false);
  const onMouse = () => setOnMouse(true);
  const onMouseOut = () => {
    setOnMouse(false);
  };
  const navigatePage = () => {
    navigate(`/product/${item.price}`, {
      state: { category: name, product: item.price },
    });
  };
  return (
    <>
      <Card
        onClick={navigatePage}
        onMouseMove={onMouse}
        onMouseOut={onMouseOut}
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
        <span className={onMouseCursor ? s.hoverCard : s.hidden}>
          посмотреть товар
        </span>
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
    </>
  );
};
