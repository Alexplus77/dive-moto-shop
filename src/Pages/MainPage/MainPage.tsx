import { SliderPromo } from "../../Components/SliderPromo";
import { Search } from "../../Components/Search";
import { Catalog } from "../../Components/Catalog";
import { Banner } from "../../Components/Banner";
import { PopularProducts } from "../../Components/PopularProducts";
import React from "react";
import s from "./MainPage.module.css";
export const MainPage = () => {
  return (
    <section className={s.mainPageContainer}>
      <SliderPromo />
      <Search />
      <Catalog />
      <PopularProducts target />
      <Banner />
      <PopularProducts target={false} />
    </section>
  );
};
