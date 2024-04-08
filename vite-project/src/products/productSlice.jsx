import { createSlice } from "@reduxjs/toolkit";
import getLoadProdsThunk, {
  addNewProdThunk,
  getProdsThunk,
  getOneProdThunk,
  switchStatusProdThunk,
  deleteProdThunk,
  editProdThunk,
} from "./productThunkActions";

const initialState = {
  products: [],
  product: null,
  addedProducts: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearProduct: (state) => {
      state.product = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLoadProdsThunk.fulfilled, (state, action) => {
      const prods = action.payload;
      state.products = prods;
    });

    builder.addCase(getProdsThunk.fulfilled, (state, action) => {
      const allProds = action.payload;
      state.addedProducts = allProds.filter((prod) => prod.added === true);
    });
    builder.addCase(getOneProdThunk.fulfilled, (state, action) => {
      const oneProd = action.payload;
      state.product = oneProd;
    });
    builder.addCase(addNewProdThunk.fulfilled, (state, action) => {
      const newProd = action.payload;
      state.addedProducts = [newProd, ...state.addedProducts];
    });
    builder.addCase(switchStatusProdThunk.fulfilled, (state, action) => {
      const updProd = action.payload;
      state.products = state.products.map((prod) =>
        updProd.id === prod.id ? updProd : prod
      );
      state.addedProducts = state.addedProducts.map((prod) =>
        updProd.id === prod.id ? updProd : prod
      );
    });
    builder.addCase(deleteProdThunk.fulfilled, (state, action) => {
      const id = action.payload;
      state.addedProducts = state.addedProducts.filter(
        (prod) => id !== prod.id
      );
      builder.addCase(editProdThunk.fulfilled, (state, action)=> {
        const editProd = action.payload
        state.addedProducts = state.addedProducts.map((prod) =>
        editProd.id === prod.id ? editProd : prod
      );
      })
    });
  },
});

export const { clearProduct } = productSlice.actions;

export default productSlice.reducer;
