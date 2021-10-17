import React from "react";
import { Col, Row } from "react-bootstrap";
import useProductConsumer from "../../../hooks/useProductConsumer";
import "./CartShow.css";
const CartShow = ({ cart }) => {
  const { id, img, name, price, quantity } = cart;
  const { quntityIncrement, quntityDicrement, hendelRemove } =
    useProductConsumer();
  return (
    <div>
      <Row className="mb-4">
        <Col className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
          <div className="cart_show_img">
            <img src={img} alt="" />
          </div>
        </Col>
        <Col className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="cart_show_title">
            <p>{name}</p>
            <h6>${(price * quantity).toFixed(2)}</h6>
          </div>
        </Col>
        <Col className="col-12 col-sm-12 col-md-3 col-lg-3">
          <div className="cart_show_qunatity">
            <button onClick={() => quntityDicrement(id)}>
              <i className="fas fa-minus"></i>
            </button>
            <input type="text" value={quantity} readOnly />
            <button onClick={() => quntityIncrement(id)}>
              <i className="fas fa-plus"></i>
            </button>
          </div>
        </Col>
        <Col className="col-12 col-sm-12 col-md-3 col-lg-3 text-center">
          <div className="cart_remove">
            <button onClick={() => hendelRemove(id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CartShow;
