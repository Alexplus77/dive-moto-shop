import { SliderPromo } from "../../Components/SliderPromo";
import { Search } from "../../Components/Search";
import { Catalog } from "../../Components/Catalog";
import { Banner } from "../../Components/Banner";
import { PopularProducts } from "../../Components/PopularProducts";
import { getProductsItems } from "../../Redux/middlewares/getProductsItems";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import React, { useEffect } from "react";
import s from "./MainPage.module.css";
export const MainPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.productsData.productsList);
  useEffect(() => {
    dispatch(getProductsItems());
  }, []);

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
