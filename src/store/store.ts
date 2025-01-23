import { useDispatch, useSelector, useStore } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./products/products.slice";

export const store = configureStore({
  reducer: {
    [productSlice.name]: productSlice.reducer,
  },
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;

export const useAppSelector = useSelector.withTypes<AppState>();
export const useAppDispath = useDispatch.withTypes<AppDispath>();
export const useAppStore = useStore.withTypes<typeof store>();
