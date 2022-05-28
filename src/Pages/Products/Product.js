import {
  faShoppingBasket,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, name, price, quantity, img, description } = product;
  const minimumOrder = parseInt(Math.ceil(quantity / 20));
  const navigate = useNavigate();
  const placeOrder = (id) => {
    navigate(`/checkout/${id}`);
  };
  return (
    <Col>
      <Card className=" h-100 border-0 shadow  rounded-3">
        <Card.Img className="w-100 h-100" variant="top" src={img} />
        <Card.Body className="d-flex flex-column h-100">
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
          <p>
            {description.slice(0, 60)}{" "}
            <span className="text-muted">learn more ...</span>
          </p>

          <Button
            onClick={() => placeOrder(_id)}
            variant="light"
            className="btn btn-sm btn-outline-dark mt-auto"
          >
            {" "}
            <span className="me-3">PURCHASE NOW</span>
            <FontAwesomeIcon icon={faShoppingCart} />
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
