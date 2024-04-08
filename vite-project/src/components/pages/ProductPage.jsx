import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProdThunk } from "../../products/productThunkActions";
import { Card } from "antd";
import { clearProduct } from "../../products/productSlice";

const { Meta } = Card;

export default function ProductPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.productSlice.product);
  console.log(product);

  useEffect(() => {
    dispatch(getOneProdThunk(id));
    return () => dispatch(clearProduct());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        style={{ width: 240 }}
        cover={<img alt={product?.title} src={product?.image} />}
      >
        <Meta title={product?.title} description={product?.description} />
      </Card>
    </div>
  );
}
