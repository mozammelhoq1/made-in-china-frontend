import { faArrowRight, faReply } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const CheckOut = () => {
  const [user, loading, error] = useAuthState(auth);
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
  const minimumOrder = parseInt(Math.ceil(quantity / 20));
  const handleOrder = (e) => {
    e.preventDefault();
    const newQuantity = parseInt(e.target.quantity.value);
    if (newQuantity < minimumOrder) {
      toast.error("you do not order less then minimum limit");
      return;
    }
    if (newQuantity > quantity) {
      toast.error("you do not order grater then maximum limit");
      return;
    }
    const updateQuantity = parseInt(quantity - newQuantity);
    const order = {
      productId,
      userName: e.target.name.value,
      email: e.target.email.value,
      quantity: newQuantity,
      phone: e.target.number.value,
      address: e.target.address.value,
    };
    const url = `http://localhost:5000/orders`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("placed order successfully");
        e.target.reset();
      });

    setUpdate(!update);
  };

  return (
    <Container className="mt-5">
      <Row className="gx-5 mx-auto  pb-5 my-5 align-items-center justify-content-center shadow-sm rounded-3 ">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100 " src={img} alt="" />
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
          <Form onSubmit={handleOrder}>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Product Id</Form.Label>
              <Form.Control type="text" value={productId} disabled />
            </Form.Group>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label> Name</Form.Label>
                <Form.Control
                  autoComplete="off"
                  type="text"
                  name="name"
                  value={user?.displayName || ""}
                  disabled
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={user?.email || ""}
                  disabled
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Enter Product Quantity</Form.Label>
              <Form.Control
                autoComplete="off"
                required
                type="number"
                name="quantity"
                placeholder="Enter Your Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                autoComplete="off"
                required
                type="number"
                name="number"
                placeholder="Enter Your Phone Number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Address</Form.Label>
              <Form.Control
                autoComplete="off"
                required
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
    </Container>
  );
};

export default CheckOut;
