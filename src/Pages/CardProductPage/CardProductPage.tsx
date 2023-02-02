import { Link, useLocation, useParams } from "react-router-dom";
import { Breadcrumb } from "antd";
import s from "../CatalogCategoryPage/CatalogCategoryPage.module.css";

export const CardProductPage = () => {
  const location = useLocation();
  const { name } = useParams();
  console.log(location.state);
  return (
    <section>
      <Breadcrumb className={s.breadcrumb} separator={">"}>
        <Breadcrumb.Item>
          <Link to={"/"}>Главная</Link>{" "}
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to={`/category/${location.state.category}`}>
            {location.state.category}
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{name}</Breadcrumb.Item>
      </Breadcrumb>
      this is CardProductPage
    </section>
  );
};
