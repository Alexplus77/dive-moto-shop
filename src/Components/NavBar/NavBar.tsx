import React from "react";
import s from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

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
      {navBar.map((item, i) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? s.navBarItemActive : s.navBarItem
          }
          to={`/category/${item}`}
          key={item}
        >
          {item}
        </NavLink>
      ))}
    </nav>
  );
};
