import React from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import bgImg from "../../../images/banner/bg.png";
import logo from "../../../images/logo/logo.png";
require("./Login.css");
const Login = () => {
  return (
    <Container
      fluid
      className="bg-img"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Row>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 mx-auto">
          <div className="login_img mb-5 pt-5">
            <img src={logo} alt="" />
          </div>
          <form className="login_form pb-5">
            <>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>
            </>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
