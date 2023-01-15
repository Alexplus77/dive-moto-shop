import React from "react";
import s from "./SliderPromo.module.css";

export const SliderPromo = () => {
  return (
    <section className={s.slider1Promo}>
      <img alt={"#"} src="/Images/slider1.png" />
      <img alt={"#"} src={"/Images/promo-main.png"} />
    </section>
  );
};
