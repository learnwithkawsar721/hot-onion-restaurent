import React, { useState } from "react";
import { Col, Container, Row, Tab, Tabs } from "react-bootstrap";
import ProductContext from "../../../context/ProductContext";
import useProduct from "../../../hooks/useProduct";
import Product from "../Product/Product";
require("./Products.css");
const Products = () => {
  const [products] = useProduct();
  const [key, setKey] = useState("Breakfast");
  const Breakfasts = products.filter(
    (product) => product.category === "Breakfast",
  );
  const Lunchs = products.filter((product) => product.category === "Lunch");
  const Dinners = products.filter((product) => product.category === "Dinner");

  return (
    <ProductContext>
      <Container>
        <Row className="pt-5">
          <Col className="col-12">
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 d-flex justify-content-center"
            >
              <Tab eventKey="Breakfast" title="Breakfast">
                <Row className="py-5 g-4">
                  {Breakfasts.map((product) => (
                    <Product product={product} key={product.id} />
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Lunch" title="Lunch">
                <Row className="py-5 g-4">
                  {Lunchs.map((product) => (
                    <Product product={product} key={product.id} />
                  ))}
                </Row>
              </Tab>
              <Tab eventKey="Dinner" title="Dinner">
                <Row className="py-5 g-4">
                  {Dinners.map((product) => (
                    <Product product={product} key={product.id} />
                  ))}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>
        {/* <Row className="py-5 g-4">
        
      </Row> */}
      </Container>
    </ProductContext>
  );
};

export default Products;
