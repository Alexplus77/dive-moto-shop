import { createSlice } from "@reduxjs/toolkit";
import { getProductsItems } from "./middlewares/getProductsItems";
import { IProductItem } from "../Types/types";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./stor";

interface IState {
  productsItem: IProductItem[];
}

const initialState: IState = {
  productsItem: [],
};
export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsItems.fulfilled, (state, action) => {
      state.productsItem = action.payload;
    });
  },
});

export const {} = productSlice.actions;
export default productSlice.reducer;
