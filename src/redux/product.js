import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    productsData: data,
  },
});

export default productSlice.reducer;