import React from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Input, message, Popconfirm } from "antd";
import { format } from "date-fns";
import {
  deleteProdThunk,
  editProdThunk,
} from "../../products/productThunkActions";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
export default function EditForm({ product, dispatch }) {
  const confirm = () => {
    dispatch(deleteProdThunk(product.id));

    message.success("Deleted");
  };

  const currentDate = format(new Date(), "dd/MM/yyyy");
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      style={{
        maxWidth: 600,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={(values) =>
        dispatch(
          editProdThunk({
            ...values,
            id: product.id,
            date: currentDate,
            added: true,
          })
        )
      }
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input title",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please input price",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please input description",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="success"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Public</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Popconfirm
          title="Delete the product"
          description="Are you sure to delete this product?"
          onConfirm={confirm}
          okText="Delete"
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      </Form.Item>
    </Form>
  );
}