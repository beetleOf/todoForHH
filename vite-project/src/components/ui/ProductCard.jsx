import React, { useCallback } from "react";
import { Card, Switch, Button, message, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteProdThunk,
  switchStatusProdThunk,
} from "../../products/productThunkActions";

const imageStyle = {
  width: "200px",
  height: "200px",
  objectFit: "cover",
};

const { Meta } = Card;

const ProductCard = React.memo(function ProductCard({ product }) {
  const dispatch = useDispatch();

  const confirm = useCallback(() => {
    dispatch(deleteProdThunk(product.id));
    message.success("Deleted");
  }, [dispatch, product.id]);

  const onChange = useCallback(
    (status) => {
      dispatch(
        switchStatusProdThunk({
          id: product.id,
          title: product.title,
          image: product.image,
          description: product.description,
          price: product.price,
          success: status,
          added: product.added,
        })
      );
    },
    [dispatch, product]
  );

  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <Link to={`/product/${product.id}`}>
          <img
            alt={product.title}
            src={
              product.image ||
              "https://cdn-icons-png.flaticon.com/512/1183/1183621.png"
            }
            style={imageStyle}
          />
        </Link>
      }
    >
      <Meta title={product.title} description={product.price} />
      <Switch
        style={{ margin: "10px" }}
        defaultValue={product.success}
        onChange={onChange}
      />
      {product.added && (
        <>
          <Popconfirm
            title="Delete the product"
            description="Are you sure to delete this product?"
            onConfirm={confirm}
            okText="Delete"
          >
            <Button danger>Delete</Button>
          </Popconfirm>
          <Link to={`/editProduct/${product.id}`}>
            <Button>Edit</Button>
          </Link>
        </>
      )}
    </Card>
  );
});

export default ProductCard;
