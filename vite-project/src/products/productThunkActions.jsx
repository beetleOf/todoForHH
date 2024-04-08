import apiService from "../apiService/productService";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getLoadProdsThunk = createAsyncThunk("load/products", async (count) => {
  const allProds = await apiService.getLoadProds(count);
  return allProds;
});

export const getProdsThunk = createAsyncThunk("/products", async () => {
  const allProds = await apiService.getProds();
  return allProds;
});

export const getOneProdThunk = createAsyncThunk("one/product", async (id) => {
  const oneProd = await apiService.getOneProd(id);
  return oneProd;
});
export const addNewProdThunk = createAsyncThunk("add/newProd", async (obj) => {
  const newProd = await apiService.addNewProd(obj);
  return newProd;
});

export const switchStatusProdThunk = createAsyncThunk(
  "switch/statusProd",
  async (obj) => {
    const updateProd = await apiService.switchStatusProd(obj);
    return updateProd;
  }
);

export const deleteProdThunk = createAsyncThunk("delete/prod", async (id) => {
  await apiService.deleteProd(id);
  return id;
});

export const editProdThunk = createAsyncThunk("edit/Prod", async (obj) => {
  const updateProd = await apiService.editProd(obj);
  return updateProd;
});

export default getLoadProdsThunk;
