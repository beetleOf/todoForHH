import { Avatar, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import { UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Search from "antd/es/input/Search";
import { useContext } from "react";
import { SearchContext } from "../Root";
// import { useState } from "react";

export default function NavBar() {
  const { setSearch } = useContext(SearchContext);
  const handleChange = (e) => setSearch(e.currentTarget.value);

  const items = [
    {
      key: 1,
      label: <Link to="/">HomePage</Link>,
    },
    {
      key: 2,
      label: <Link to="/products">Products</Link>,
    },
    {
      key: 3,
      label: <Link to="/add/product">Add product</Link>,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
        <Search
          style={{ width: "300px", margin: "30px" }}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onChange={handleChange}
        />
        <Avatar
          style={{
            backgroundColor: "blue",
          }}
          size={48}
          icon={<UserOutlined />}
        />
      </Header>
    </Layout>
  );
}
