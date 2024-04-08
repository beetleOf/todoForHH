import React, { useEffect } from "react";
import EditForm from "../ui/EditForm";
import { getOneProdThunk } from "../../products/productThunkActions";
import { clearProduct } from "../../products/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function EditPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productSlice.product);

  useEffect(() => {
    dispatch(getOneProdThunk(id));
    return () => dispatch(clearProduct());
  }, []);
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Edit Product
      </h1>
      <div
        style={{
          margin: "100px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div>
          <EditForm dispatch={dispatch } product={product}/>
        </div>
      </div>
    </>
  );
}
