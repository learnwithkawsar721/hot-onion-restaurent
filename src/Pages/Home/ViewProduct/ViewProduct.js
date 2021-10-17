import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useProductConsumer from "../../../hooks/useProductConsumer";
import "./ViewProduct.css";
const ViewProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  const { products, quntityDicrement, quntityIncrement } = useProductConsumer();
  useEffect(() => {
    const data = products.find((pd) => pd.id === parseInt(id));
    setSingleProduct(data);
  }, [id, products]);

  return (
    <Container>
      <Row className="pt-5">
        <Col xs={12} sm={12} md={6} lg={8}>
          <div className="single_product">
            <h1>{singleProduct?.name}</h1>
            <p>{singleProduct?.discription}</p>
            <h1>Price : ${singleProduct?.price} </h1>
            <div className="cart_show_qunatity product_view">
              <button onClick={() => quntityDicrement(id)}>
                <i className="fas fa-minus"></i>
              </button>
              <input type="text" value={singleProduct?.quantity} readOnly />
              <button onClick={() => quntityIncrement(id)}>
                <i className="fas fa-plus"></i>
              </button>
            </div>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={4}>
          <div className="single_img">
            <img src={singleProduct?.img} className="w-100" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ViewProduct;
