import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsItems = createAsyncThunk("productSlice", () =>
  axios.get(`${process.env.REACT_APP_API}getProducts`).then(({ data }) => {
    return data;
  })
);
