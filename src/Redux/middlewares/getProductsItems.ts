import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductItem } from "../../Types/types";
import axios from "axios";

export const getProductsItems = createAsyncThunk<IProductItem[]>(
  "productSlice/getProductItems",
  () =>
    axios
      .get<IProductItem[]>(`${process.env.REACT_APP_API}getProducts`)
      .then(({ data }) => {
        return data;
      })
);
export const getProductByName = createAsyncThunk<IProductItem, string>(
  "productSlice/getProductByName",
  (name) =>
    axios
      .get<IProductItem>(`${process.env.REACT_APP_API}getProductByName/${name}`)
      .then(({ data }) => data)
);
