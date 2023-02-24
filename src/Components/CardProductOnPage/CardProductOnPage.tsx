import { useAppSelector } from "../../Hooks/reduxHooks";
import style from "./CardProductOnPage.module.css";
export const CardProductOnPage = () => {
  const productData = useAppSelector((state) => state.productsData.productItem);
  return (
    <section className={style.container}>this is card product on page</section>
  );
};
