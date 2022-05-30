import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleComment = (e) => {
    e.preventDefault();

    const email = user?.email;
    const name = user?.displayName;
    const img = user?.photoURL;
    const comment = e.target.comment.value;
    const rating = parseInt(e.target.rating.value);
    if (rating <= 0 || rating > 5) {
      toast.error("Please fullfil the requirement");
      return;
    }
    const review = {
      email,
      name,
      img,
      comment,
      rating,
    };

    const url = ``;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Thanks For Your Review");
        e.target.reset();
      });
  };
  return (
    <Container className="mt-5 p-3 rounded-3 shadow-none bg-light">
      <h1 className="text-center mb-5">Please Drop Your Feedback </h1>
      <Form onSubmit={handleComment}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            placeholder="Write here ..."
            rows={3}
            required
            name="comment"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Control
            type="number"
            placeholder="Please Add Your Rating 1 - 5"
            required
            name="rating"
          />
        </Form.Group>

        <Button
          className="btn btn-outline-dark"
          variant="light"
          type="submit"
          style={{ height: "40px" }}
        >
          SUBMIT <FontAwesomeIcon className="ms-2" icon={faMessage} />
        </Button>
      </Form>
    </Container>
  );
};

export default AddReview;
