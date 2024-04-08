import React, { useContext, useEffect, useState } from "react";
import { Layout, Row, Col, Tabs, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ui/ProductCard";
import getLoadProdsThunk, {
  getProdsThunk,
} from "../../products/productThunkActions";
import { Switch } from "antd";
import { SearchContext } from "../Root";

const { TabPane } = Tabs;

function ProductsPage() {
  const { search } = useContext(SearchContext);
  const [swtch, setSwtch] = useState(false);
  const [activeTab, setActiveTab] = useState("1");
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productSlice.products);
  const addedProducts = useSelector(
    (state) => state.productSlice.addedProducts
  );
  console.log(search, "-----------------------");
  // console.log(addedProducts);
  const handleLoad = (count) => {
    dispatch(getLoadProdsThunk(count));
  };

  useEffect(() => {
    dispatch(getProdsThunk());
    dispatch(getLoadProdsThunk());
  }, []);

  const onChange = (key) => {
    setActiveTab(key);
  };

  const hadleSwtchStatus = (status) => {
    setSwtch(status);
  };

  const filteredAddedProducts = addedProducts
    .filter((prod) => {
      return swtch ? prod.success === true : prod.success === false;
    })
    .filter((prod) => prod.title.toLowerCase().includes(search.toLowerCase()));
  const filteredProducts = products
    .filter((prod) => {
      return swtch ? prod.success === true : prod.success === false;
    })
    .filter((prod) => prod.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <Layout style={{ padding: "24px" }}>
      <Switch
        onChange={hadleSwtchStatus}
        checkedChildren="Опубликованы"
        unCheckedChildren="Не опубликованы"
        defaultValue={swtch}
      />
      <Tabs activeKey={activeTab} onChange={onChange}>
        <TabPane tab="Products" key="1">
          <Row gutter={[16, 16]}>
            {filteredProducts.map((prod) => (
              <Col key={prod.id} xs={24} sm={12} md={8} lg={6}>
                <ProductCard product={prod} />
              </Col>
            ))}
          </Row>
          <div
            style={{
              margin: "10px",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Button style={{ margin: "0 5px" }} onClick={() => handleLoad(8)}>
              Load 8 Products
            </Button>
            <Button style={{ margin: "0 5px" }} onClick={() => handleLoad(16)}>
              Load 16 Products
            </Button>
            <Button style={{ margin: "0 5px" }} onClick={() => handleLoad(20)}>
              Load 20 Products
            </Button>
          </div>
        </TabPane>
        <TabPane tab="Added Products" key="2">
          <Row gutter={[16, 16]}>
            {filteredAddedProducts.map((prod) => (
              <Col key={prod.id} xs={24} sm={12} md={8} lg={6}>
                <ProductCard product={prod} />
              </Col>
            ))}
          </Row>
        </TabPane>
      </Tabs>
    </Layout>
  );
}

export default ProductsPage;
