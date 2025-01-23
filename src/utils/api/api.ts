import axios from "axios";
import { Product, ProductId } from "../../store/products/products.slice";

const api = axios.create({
  baseURL: `http://localhost:3000`,
});

export const getAllProducts = () => {
  return api.get("/products");
};

export const addNewProduct = (data: Product) => {
  return api.post(`/products/`, data);
};

export const updateSomeProduct = (data: Product) => {
  return api.put(`/products/${data.id}`, data);
};

export const removeProduct = (id: ProductId) => {
  return api.delete(`/products/${id}`);
};
