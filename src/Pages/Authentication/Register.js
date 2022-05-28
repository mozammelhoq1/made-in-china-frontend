import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";
import loginImage from "../../Images/login.jpg";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const navigateLogin = () => {
    navigate("/login");
  };
  if (loading || updating) {
    return <Loading />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const agree = event.target.terms.checked;
    if (agree) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate("/products");
    }
  };
  return (
    <Container className="mt-5">
      <Row className="g-5 mx-auto pb-5 align-items-center justify-content-center">
        <Col xs={12} sm={12} md={6}>
          <img className="w-100 rounded-3" src={loginImage} alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
          <h1 className="text-center">Please Register</h1>
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />
              <Form.Text className="text-muted">
                We'll never share your name with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                onClick={() => setAgree(!agree)}
                name="terms"
                type="checkbox"
                className={`fw-bold ${agree ? "" : "text-secondary"}`}
                label="Accept Terms And Conditions"
              />
            </Form.Group>
            <Button
              disabled={!agree}
              className="btn btn-sm btn-dark w-100 mb-2"
              variant="light"
              type="submit"
            >
              SUBMIT
            </Button>
          </Form>
          <p>
            Already Have An Account?{" "}
            <Link
              to="/login"
              className="text-primary pe-auto"
              onClick={navigateLogin}
            >
              Please Login
            </Link>
          </p>
          <SocialLogin />
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
