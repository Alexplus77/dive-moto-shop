import React from "react";
import s from "./Catalog.module.css";

export const Catalog = () => {
  const catalogItem = [
    "/Images/qudrocircle.png",
    "/Images/hidrocircle.png",
    "/Images/speedboat.png",
    "/Images/snowmobiles.png",
    "/Images/rovers.png",
    "/Images/engines.png",
  ];
  return (
    <section className={s.catalog}>
      {catalogItem.map((item) => (
        <img alt={"#"} key={item} src={item} />
      ))}
    </section>
  );
};
