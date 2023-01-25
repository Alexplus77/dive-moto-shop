import React, { useState } from "react";
import s from "./ParamsBlock.module.css";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { Button, Checkbox, Input, Select, Slider, Space } from "antd";
import { Option } from "antd/es/mentions";

export const ParamsBlock = () => {
  const defaultValueSliderPrice: [number, number] = [100000, 300000];
  const [has, setHas] = useState<boolean>(true);
  const [newItemMenu, setNewItemMenu] = useState<boolean>(true);
  const [priceMenu, setPriceMenu] = useState<boolean>(true);
  const [sliderValue, setSliderValue] = useState<number[]>(
    defaultValueSliderPrice
  );
  const [brandMenu, setBrandMenu] = useState<boolean>(true);
  const [modelMenu, setModelMenu] = useState<boolean>(true);
  const onChangeSlider = (value: [number, number]) => {
    setSliderValue(value);
  };
  const powerEngine: string[] = ["90", "130", "154", "230", "300"];
  const brandItem = [
    "BRP",
    "Spark 2",
    "Spark 3 ",
    "Spark 2",
    "Spark 2",
    "Spark 2",
    "Spark 2",
  ];
  const modelsItems = [
    "Sea-doo Spark 2",
    "SeaDoo Spark 90 ",
    "SeaDoo GTI 155",
    "SeaDoo GTR 230",
  ];
  return (
    <div>
      <div
        onClick={() => setHas(!has)}
        style={{ width: "100%", cursor: "pointer", background: "#F0F0F4" }}
      >
        <div className={s.menu}>
          {has ? <UpOutlined /> : <DownOutlined />}
          <span>Наличие</span>
        </div>
      </div>
      <div className={has ? s.checkboxContainer : s.hidden}>
        <Checkbox>В наличие</Checkbox>
        <Checkbox>Под заказ</Checkbox>
      </div>
      <div
        onClick={() => setNewItemMenu(!newItemMenu)}
        style={{ width: "100%", cursor: "pointer", background: "#F0F0F4" }}
      >
        <div className={s.menu}>
          {newItemMenu ? <UpOutlined /> : <DownOutlined />}
          <span>Новинки</span>
        </div>
      </div>
      <div className={newItemMenu ? s.checkboxContainer : s.hidden}>
        <Checkbox>Все</Checkbox>
        <Checkbox>Новинки</Checkbox>
        <Checkbox>Акции</Checkbox>
      </div>
      <div
        onClick={() => setPriceMenu(!priceMenu)}
        style={{ width: "100%", cursor: "pointer", background: "#F0F0F4" }}
      >
        <div className={s.menu}>
          {priceMenu ? <UpOutlined /> : <DownOutlined />}
          <span>Цена</span>
        </div>
      </div>
      <div className={priceMenu ? s.priceMenu : s.hidden}>
        <Slider
          onChange={(e: [number, number]) => onChangeSlider(e)}
          range
          min={0}
          max={500000}
          defaultValue={defaultValueSliderPrice}
        />
        <div className={s.checkboxContainer}>
          <span style={{ justifySelf: "left" }}>
            от {sliderValue[0]} &#8381;
          </span>
          <span style={{ justifySelf: "right" }}>
            до {sliderValue[1]} &#8381;
          </span>
        </div>
      </div>
      <div
        style={{ borderBottom: "2px #C4C4C4 solid" }}
        className={s.checkboxContainer}
      >
        <span>Мощность л.с.</span>
        <Select defaultValue={powerEngine[0]}>
          {powerEngine.map((el: string) => (
            <Select.Option key={el} value={el}>
              {el}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div
        style={{ borderBottom: "2px #C4C4C4 solid" }}
        className={s.checkboxContainer}
      >
        <span>Мощность двигателя, л.с.</span>
        <Select defaultValue={powerEngine[0]}>
          {powerEngine.map((el: string) => (
            <Select.Option key={el} value={el}>
              {el}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div
        style={{ borderBottom: "2px #C4C4C4 solid" }}
        className={s.checkboxContainer}
      >
        <span>Макс. скорость</span>
        <Select defaultValue={powerEngine[0]}>
          {powerEngine.map((el: string) => (
            <Select.Option key={el} value={el}>
              {el}
            </Select.Option>
          ))}
        </Select>
      </div>
      <div
        onClick={() => setBrandMenu(!brandMenu)}
        style={{ width: "100%", cursor: "pointer", background: "#F0F0F4" }}
      >
        <div className={s.menu}>
          {brandMenu ? <UpOutlined /> : <DownOutlined />}
          <span>Бренд</span>
        </div>
      </div>
      <div className={brandMenu ? s.priceMenu : s.hidden}>
        <div className={s.brandMenuContainer}>
          {brandItem.map((el: string) => (
            <Checkbox key={el}>{el}</Checkbox>
          ))}
        </div>
        <Button>Показать еще</Button>
      </div>

      <div
        onClick={() => setModelMenu(!modelMenu)}
        style={{ width: "100%", cursor: "pointer", background: "#F0F0F4" }}
      >
        <div className={s.menu}>
          {modelMenu ? <UpOutlined /> : <DownOutlined />}
          <span>Модель</span>
        </div>
      </div>
      <div className={modelMenu ? s.priceMenu : s.hidden}>
        <Input.Search placeholder={"Введите модель"} />
        <div className={s.brandMenuContainer}>
          {modelsItems.map((el: string) => (
            <Checkbox key={el}>{el}</Checkbox>
          ))}
        </div>
        <Button>Показать еще</Button>
      </div>
    </div>
  );
};
