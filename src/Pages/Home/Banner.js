import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../Images/banner/banner-1.webp";
import banner2 from "../../Images/banner/banner-2.webp";
import banner3 from "../../Images/banner/banner-3.webp";
import banner4 from "../../Images/banner/banner-4.webp";
import banner5 from "../../Images/banner/banner-5.webp";
import banner6 from "../../Images/banner/banner-6.webp";

const Banner = () => {
  return (
    <Carousel variant="dark" className="mb-5 w-100">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          height={400}
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Sunhans Small Size New Wireless 3G 4G LTE Mifi</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Portable 3G 4G LTE USB Hotspot Signal Mobile</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>4G LTE Pocket Hotspot Mifi Wireless Modem Network</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>G-140W-MD 1ge 3fe 1tel 1USB 2.4G WiFi Gpon Ont</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner5}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Popular! Mini WiFi Repeater Extend 300m WiFi</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={400}
          src={banner6}
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3>4G LTE Router Support Openwrt Wireless Modem</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
