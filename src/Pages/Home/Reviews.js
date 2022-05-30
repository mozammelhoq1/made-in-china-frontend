import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [update, setUpdate] = useState(true);
  useEffect(() => {
    fetch("https://arcane-sea-21908.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,

        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container fluid className="my-5 mx-auto">
      <Container>
        <h1 className="text-center my-5">
          <span className=" border-dark border-bottom border-5 pb-3">
            Testimonials
          </span>
        </h1>
        <Container>
          <Slider {...settings}>
            {/* <Row xs={1} md={2} lg={3} xl={4} className="g-4"> */}
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
            {/* </Row> */}
          </Slider>
        </Container>
      </Container>
    </Container>
  );
};

export default Reviews;
