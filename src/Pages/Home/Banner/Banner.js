import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import bgImg from "../../../images/banner/bg.png";
require("./Banner.css");
const Banner = () => {
  return (
    <Container
      fluid
      className="bg-img"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Row>
        <Col className="col-12 col-sm-12 col-md-6 col-lg-6 mx-md-auto mx-lg-auto">
          <div className="banner text-center">
            <h3 className="banner_title">Best food Waiting for your belly</h3>
            <input type="text" placeholder="Search Food Item" />
            <Button className="banner_btn">Search</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
