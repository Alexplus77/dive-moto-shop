import { useParams, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import s from "./CatalogCategoryPage.module.css";
import { Breadcrumb, Button, Select } from "antd";
import { Option } from "antd/es/mentions";
import { ParamsBlock } from "../../Components/ParamsBlock";

export const CatalogCategoryPage = () => {
  const { name } = useParams();

  return (
    <section className={s.containerPage}>
      <Breadcrumb className={s.breadcrumb} separator={">"}>
        <Breadcrumb.Item>
          <Link to={"/"}>Главная</Link>{" "}
        </Breadcrumb.Item>
        <Breadcrumb.Item>{name}</Breadcrumb.Item>
      </Breadcrumb>
      <h1>{name}</h1>
      <section className={s.sortItem}>
        <div className={s.sortItem1}>
          <span>Полноприводные</span>
          <span>от 5000</span>
          <span>BRP</span>
          <Button>Еще</Button>
        </div>
        <div className={s.sortItem2}>
          <Select defaultValue={"Популярности"}>
            <Select.Option value={"populate"}>Популярности</Select.Option>
            <Select.Option value={"price"}>Цене</Select.Option>
            <Select.Option value={"discount"}>Скидкам</Select.Option>
          </Select>
          <div className={s.iconGroup}>
            <img alt={"..."} src={"/Images/icons/sortIcon1.svg"} />
            <img alt={"..."} src={"/Images/icons/sortIcon2.svg"} />
          </div>
        </div>
      </section>
      <section className={s.catalogContainer}>
        <ParamsBlock />
        <div>ProductList</div>
      </section>
    </section>
  );
};
