import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import s from "../CatalogCategoryPage/CatalogCategoryPage.module.css";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import { useEffect } from "react";
import { getProductByName } from "../../Redux/middlewares/getProductsItems";
import { CardProductOnPage } from "../../Components/CardProductOnPage";

export const CardProductPage = () => {
  const location = useLocation();
  const { name } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    name && dispatch(getProductByName(name));
  }, [name]);

  const productData = useAppSelector((state) => state.productsData.productItem);
  console.log(productData);
  return (
    <section>
      <Breadcrumb className={s.breadcrumb} separator={">"}>
        <Breadcrumb.Item>
          <Link to={"/"}>Главная</Link>{" "}
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/category/${productData.category}`}>
            {productData.category}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{productData.name}</Breadcrumb.Item>
      </Breadcrumb>
      <CardProductOnPage />
    </section>
  );
};
