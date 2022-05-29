import {
  faArrowRight,
  faRepeat,
  faReply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const CheckOut = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [update, setUpdate] = useState(true);
  const { name, price, quantity, img, description } = product;
  useEffect(() => {
    const url = `http://localhost:5000/checkout/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, update]);
  const handleOrder = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const newQuantity = parseInt(e.target.quantity.value);
    const updateQuantity = parseInt(quantity - newQuantity);
    console.log(quantity, newQuantity, updateQuantity);
    setUpdate(!update);
    e.target.reset();
  };
  const minimumOrder = parseInt(Math.ceil(quantity / 20));
  return (
    <Container className="mt-5">
      <Row className="gx-5 mx-auto  pb-5 my-5 align-items-center justify-content-center shadow-sm rounded-3 ">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100 " src={product.img} alt="" />
          <h5>{name}</h5>
          <h6>
            Price :{" "}
            <span className="text-danger fw-bold">
              <sup>$</sup> {price}
            </span>
          </h6>
          <h6>
            Available :{" "}
            {quantity === 0 ? (
              <span className="bg-danger px-2 rounded-pill text-light fw-bold">
                <small>Sold-Out</small>
              </span>
            ) : (
              quantity
            )}
          </h6>
          <h6>
            {" "}
            {quantity === 0 ? "" : <span>Minimum Order : {minimumOrder}</span>}
          </h6>
          <p>{description}</p>
        </Col>
        <Col xs={12} sm={12} md={6}>
          {/* <p>Product Id : {productId}</p>
          <p>Name : {name}</p>
          <p>Supplier : {supplier}</p>
          <p>
            Quantity :{" "}
            {quantity === 0 ? (
              <b className="text-danger">sold-out</b>
            ) : (
              quantity
            )}
          </p>
          <p>Price : $ {price}</p>
          <p>Description : {description}</p>
          <Button
            className="btn btn-sm btn-outline-dark w-100 my-2"
            variant="light"
          >
            Delivery <FontAwesomeIcon icon={faRepeat} />
          </Button> */}
          <Form onSubmit={handleOrder}>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Product Id</Form.Label>
              <Form.Control
                type="text"
                name="_id"
                value={productId}
                readOnly
                disabled
              />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Enter Product Quantity</Form.Label>
              <Form.Control
                required
                type="number"
                name="quantity"
                placeholder="Enter Your Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="number"
                name="number"
                placeholder="Enter Your Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                name="address"
                placeholder="Apartment, studio, or floor"
              />
            </Form.Group>

            {quantity === 0 ? (
              <Button
                disabled
                className="btn btn-dark"
                variant="light"
                type="submit"
              >
                PLACE ORDER{" "}
                <FontAwesomeIcon
                  className="ms-2"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </Button>
            ) : (
              <Button
                className="btn btn-outline-dark"
                variant="light"
                type="submit"
              >
                PLACE ORDER{" "}
                <FontAwesomeIcon
                  className="ms-2"
                  icon={faArrowRight}
                ></FontAwesomeIcon>
              </Button>
            )}
          </Form>
        </Col>
      </Row>
      <Form className="shadow-sm bg-light p-5 rounded-pill">
        <Col className="d-flex mx-auto w-100">
          <Form.Control
            name="quantity"
            type="number"
            placeholder="Quantity"
            required
          />
          <Button
            className="btn ms-3 d-flex mx-auto align-items-center  btn-outline-dark"
            variant="light"
            type="submit"
            style={{ height: "40px" }}
          >
            RESTOCK <FontAwesomeIcon className="ms-2" icon={faReply} />
          </Button>
        </Col>
      </Form>
    </Container>
  );
};

export default CheckOut;
