import React from "react";
import { Container, Nav, Navbar, Button, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProductConsumer from "../../../hooks/useProductConsumer";
import logo from "../../../images/logo/logo.png";
require("./Header.css");
const Header = () => {
  const { cart } = useProductConsumer();

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="150"
            height="30"
            className="d-inline-block align-top"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/carts">
              <i className="fas fa-shopping-cart"></i>
              <Badge bg="danger">{cart.length}</Badge>
            </Nav.Link>

            <Nav.Link as={Link} to="/login" className="register login">
              Login
            </Nav.Link>
            <Button href="#" className="register">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
