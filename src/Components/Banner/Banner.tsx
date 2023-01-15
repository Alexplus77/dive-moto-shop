import s from "./Banner.module.css";
import { Button } from "antd";
export const Banner = () => {
  return (
    <section className={s.bannerContainer}>
      <div className={s.imageContainer}>
        <img alt={"#"} src={"/Images/Banner/CFMOTO-X6-EPS_blue 2.png"} />
        <img
          alt={"#"}
          src={
            "/Images/Banner/2018-Maverick-X3-X-rc-TURBO-R-Carbon-Black-and-Octane-Blue_3-4-front4072 2.png"
          }
        />
      </div>
      <p className={s.bannerText}>
        <span>CКИДКИ</span>
        <span>на все запчасти</span>
        <span>до 70%</span>
      </p>
      <Button className={s.btnBanner}>ПОСМОТРЕТЬ ВСЕ</Button>
    </section>
  );
};
