import { createSlice } from "@reduxjs/toolkit";
import {
  getCategoryByName,
  getProductByName,
  getProductsItems,
} from "./middlewares/getProductsItems";
import { IProductItem } from "../Types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./stor";

interface IState {
  productsList: IProductItem[];
  productItem: IProductItem;
}
const productItemReset = {
  _id: "",
  name: "",
  category: "",
  path: "",
  sale: false,
  price: 0,
  parameters: {},
  availability: 0,
  countStar: 0,
};
const initialState: IState = {
  productsList: [],
  productItem: productItemReset,
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsItems.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.productItem = productItemReset;
    });
    builder.addCase(getCategoryByName.fulfilled, (state, action) => {
      state.productsList = action.payload;
      state.productItem = productItemReset;
    });
    builder.addCase(getProductByName.fulfilled, (state, action) => {
      state.productItem = action.payload;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
