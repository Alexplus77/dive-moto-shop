import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductItem } from "../../Types/types";
import axios from "axios";

export const getProductsItems = createAsyncThunk<IProductItem[]>(
  "productSlice",
  () =>
    axios
      .get<IProductItem[]>(`${process.env.REACT_APP_API}getProducts`)
      .then(({ data }) => {
        return data;
      })
);
