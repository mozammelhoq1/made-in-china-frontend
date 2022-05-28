import {
  faChevronRight,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";
import { Col, Row } from "react-bootstrap";
import "../Footer/Footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <Row className="mx-auto bg-light shadow-none g-4 py-5 mt-5">
      <Col xs={12} md={3} className="text-start fw-normal">
        <h4>
          <span className="border-dark border-bottom border-5 py-1 ">
            Useful Links
          </span>
        </h4>
        <p className="text-start footer-menu mt-3">
          {" "}
          <FontAwesomeIcon icon={faChevronRight} /> About us
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Our community
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Local events
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Privacy policy
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Service plus
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Connect Us
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Terms & Conditions
        </p>
      </Col>
      <Col xs={12} md={3} className="text-start fw-normal">
        <h4>
          <span className="border-dark border-bottom border-5 py-1 ">
            Our Shop
          </span>
        </h4>
        <p className="text-start footer-menu mt-3">
          {" "}
          <FontAwesomeIcon icon={faChevronRight} /> Hot Products
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> China Products
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> China
          Manufacturers/Suppliers
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Wholesale Products
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Wholesale Price
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Industry Sites
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Product Index
        </p>
      </Col>
      <Col xs={12} md={3} className="text-start fw-normal">
        <h4>
          <span className="border-dark border-bottom border-5 py-1 ">
            Support
          </span>
        </h4>
        <p className="text-start footer-menu mt-3">
          {" "}
          <FontAwesomeIcon icon={faChevronRight} /> Customer Support
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Delivery Supports
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Continent Channel
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Regional Channels
        </p>

        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> FAQs
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> Site Map
        </p>
        <p className="text-start footer-menu">
          <FontAwesomeIcon icon={faChevronRight} /> TradeMessenger
        </p>
      </Col>
      <Col xs={12} md={3} className="text-start fw-normal">
        <h4>
          <span className="border-dark border-bottom border-5 py-1 ">
            Location
          </span>
        </h4>
        <p className="mt-3">
          {" "}
          <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
          <span className="ms-2">
            Level-3, 24, Agrabad, DoubleMooring, Chittagong
          </span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
          <span className="ms-2">Official: made-in-china@gmail.com</span>
        </p>
        <p>
          {" "}
          <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
          <span className="ms-2">Helpline: 01822777360 , 01759427128</span>
        </p>
        <small>(Available : Sat - Thu, 10:00 AM to 7:00 PM)</small>
      </Col>
      <p className="fw-normal text-center pt-3">
        <span className="footer-menu">Terms & Conditions</span> |{" "}
        <span className="footer-menu">Declaration</span> |{" "}
        <span className="footer-menu">Privacy Policy</span>
      </p>
      <p className="fw-bold text-center">
        Copyright © 1998-{year} Focus Technology Co. , Ltd. All Rights Reserved.
      </p>
    </Row>
  );
};

export default Footer;
