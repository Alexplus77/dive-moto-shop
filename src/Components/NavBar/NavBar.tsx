import React from "react";
import s from "./NavBar.module.css";

export const NavBar = () => {
  const navBar = [
    "Квадроциклы",
    "Катера",
    "Гидроциклы",
    "Лодки",
    "Вездеходы",
    "Снегоходы",
    "Двигатели",
    "Запчасти",
  ];
  return (
    <nav className={s.navBar}>
      {navBar.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </nav>
  );
};
