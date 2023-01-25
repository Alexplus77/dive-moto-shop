import s from "./Footer.module.css";
import { Button, Form, Input } from "antd";

export const Footer = () => {
  const infoShop = [
    "Информация\n",
    "О компании\n",
    "Контакты\n",
    "Акции\n",
    "Магазины",
  ];
  const shopLinks = [
    "Интернет-магазин\n",
    "Доставка и самовывоз\n",
    "Оплата\n",
    "Возврат-обмен\n",
    "Новости",
  ];
  return (
    <footer className={s.footerContainer}>
      <div className={s.footerMainContainer}>
        <section className={s.subscribeContainer}>
          <p className={s.subscribeText}>
            Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
          </p>
          <Form className={s.formSubmit}>
            <Input
              placeholder={"Введите ваш e-mail:"}
              className={s.inputSubmit}
            />
            <Button type={"primary"} className={s.btnSubmit}>
              Отправить
            </Button>
          </Form>
        </section>
        <section className={s.infoContainer}>
          {infoShop.map((elem, i) => (
            <nav
              key={elem}
              className={i === 0 ? s.navInfoBold : s.navInfoRegular}
            >
              {elem}
            </nav>
          ))}
        </section>
        <section className={s.infoContainer}>
          {shopLinks.map((elem, i) => (
            <nav
              key={i + elem}
              className={i === 0 ? s.navInfoBold : s.navInfoRegular}
            >
              {elem}
            </nav>
          ))}
        </section>
        <section className={s.iconFooter}>
          <img alt={"#"} src={"/Images/icons/instagram-sketched (1) 1.svg"} />
          <img alt={"#"} src={"/Images/icons/vk 1.svg"} />
          <img alt={"#"} src={"/Images/icons/facebook 1.svg"} />
          <img alt={"#"} src={"/Images/icons/youtube 1.svg"} />
        </section>
      </div>
      <section className={s.footerFooter}>
        <a href={"..."}>Договор оферты</a>
        <a href={"..."}>Политика обработки персональных данных</a>
      </section>
    </footer>
  );
};
