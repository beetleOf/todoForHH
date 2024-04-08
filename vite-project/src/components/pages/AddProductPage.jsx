import React from "react";
import AddForm from "../ui/AddForm";

export default function AddProductPage() {
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Add Product</h1>
      <div
        style={{
          margin: "100px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <AddForm />
      </div>
    </>
  );
}
