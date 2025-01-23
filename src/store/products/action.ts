import { createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import {
  addNewProduct,
  getAllProducts,
  removeProduct,
  updateSomeProduct,
} from "../../utils/api/api";
import { Product, ProductId } from "./products.slice";

export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
  try {
    const { data } = await getAllProducts();
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const addProduct = createAsyncThunk(
  "addProduct",
  async (product: Product) => {
    try {
      const { data } = await addNewProduct({
        ...product,
        id: nanoid(),
      });
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "deleteProduct",
  async (id: ProductId) => {
    try {
      const { data } = await removeProduct(id);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "updateProduct",
  async (product: Product) => {
    try {
      const { data } = await updateSomeProduct(product);
      return data;
    } catch (error) {
      return Promise.reject(error);
    }
  }
);
