import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Product.css";
import useProductConsumer from "../../../hooks/useProductConsumer";

const Product = ({ product }) => {
  const { id, name, img, price } = product;
  const { hendelAddToCart } = useProductConsumer();
  return (
    <Col xs={12} sm={12} md={6} lg={4}>
      <Card className="porduct_card h-100">
        <Card.Img variant="top" className="product_img" src={img} />
        <Card.Body>
          <Card.Title as={Link} to={`/single/product/${id}`}>
            {name}
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <Card.Subtitle>${price}</Card.Subtitle>
            <Button onClick={() => hendelAddToCart(product)}>
              <i className="fas fa-shopping-cart"></i> add Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
