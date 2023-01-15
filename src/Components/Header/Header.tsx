import React from "react";
import s from "./Header.module.css";
export const Header = () => {
  return (
    <header>
      <span className={s.headerItem}>Магазины</span>
      <span className={s.headerItem}>Акции</span>
      <span className={s.headerItem}>Доставка и оплата</span>
      <img alt={"#"} className={s.logo} src={"/Images/logo.svg"} />
      <div className={s.headerIcon}>
        <img alt={"#"} src={"/Images/icons/localisation 1.svg"} />
        <span>Москва, ул. Науки 25</span>{" "}
      </div>
      <div className={s.headerIcon}>
        <img alt={"#"} src={"/Images/icons/likers.svg"} />
        <img alt={"#"} src={"/Images/icons/login.svg"} />
        <img alt={"#"} src={"/Images/icons/backet.svg"} />
      </div>
    </header>
  );
};
