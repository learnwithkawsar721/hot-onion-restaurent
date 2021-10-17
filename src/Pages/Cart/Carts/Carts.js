import React, { memo } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import useProductConsumer from "../../../hooks/useProductConsumer";
import CartShow from "../Show/CartShow";

const Carts = () => {
  // const [product] = useProduct();
  // const [cart] = useCart([);
  const { cart } = useProductConsumer();
  let price = 0;
  let txt = 0;

  for (const product of cart) {
    price += product.quantity * product.price;
    if (price >= 50) {
      txt = (price * 10) / 100;
      // return;
    } else {
      txt = 15;
    }
  }
  let total = price + txt;
  return (
    <Container fluid>
      <Row className="pt-5">
        <h1 className="text-center mb-4">Cart</h1>
        <Col className="col-12 col-sm-12 col-md-8 col-lg-8">
          <Row className="mb-4">
            <Col className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <h5>Img</h5>
            </Col>
            <Col className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <h5>Title</h5>
            </Col>
            <Col className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <h5>Quntity</h5>
            </Col>
            <Col className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
              <h5>ReMove</h5>
            </Col>
          </Row>
          {cart.map((cd) => (
            <CartShow cart={cd} key={cd.id} />
          ))}
        </Col>
        <Col className="col-12 col-sm-12 col-md-4 col-lg-4">
          <Card border="info">
            <Card.Header className="text-center">Summary</Card.Header>
            <Card.Body>
              <Card.Text>
                <Card.Subtitle className="mb-3">
                  Product Price: $ {price.toFixed(2)}{" "}
                </Card.Subtitle>
                <Card.Subtitle className="mb-3">
                  Shiping Tax : $ {txt.toFixed(2)}{" "}
                </Card.Subtitle>
                <Card.Title>Total: $ {total.toFixed(2)}</Card.Title>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(Carts);
