import { faCircleArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.webp";
const NavigationBar = () => {
  return (
    <Navbar
      bg="light"
      variant="light"
      expand="lg"
      sticky="top"
      className="shadow-sm mb-5"
    >
      <Container>
        <Navbar.Brand href="#">
          <img height={50} src={logo} alt="" />
          <span className="fs-4 fw-bolder">Made-In-China</span>
          <br />
          <small className="font-monospace fs-6">Lower price than ever</small>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto fw-bold text-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="products">
              Explore
            </Nav.Link>
            <Nav.Link as={Link} to="blogs">
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="login">
              <span className="me-2">LOG IN</span>
              <FontAwesomeIcon icon={faCircleArrowLeft}></FontAwesomeIcon>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
