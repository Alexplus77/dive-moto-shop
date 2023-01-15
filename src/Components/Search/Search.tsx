import React from "react";
import s from "./Search.module.css";
export const Search = () => {
  return (
    <section>
      <nav className={s.navBarSearch}>
        <span>Поиск по номеру</span>
        <span>Поиск по марке</span>
        <span>Поиск по названию товара</span>
      </nav>
      <form className={s.formSearch}>
        <input className={s.inputSearch} type={"search"} />
        <button className={s.btnSearch}>искать</button>
      </form>
    </section>
  );
};
