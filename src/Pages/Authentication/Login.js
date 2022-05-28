import React, { useRef } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";
import loginImage from "../../Images/login.jpg";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  if (error) {
    errorElement = (
      <Alert variant="danger">This is a {error?.message} — check it out!</Alert>
    );
  }
  if (loading || sending) {
    return <Loading />;
  }
  if (user) {
    // navigate(from, { replace: true });
  }
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);

    navigate(from, { replace: true });
  };
  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("sent email", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      toast.error("please enter your email address", {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    }
  };
  return (
    <>
      <Container className="mt-5">
        <Row className="g-5 mx-auto pb-5 align-items-center justify-content-center">
          <Col xs={12} sm={12} md={6}>
            <img className="w-100 rounded-3" src={loginImage} alt="" />
          </Col>
          <Col xs={12} sm={12} md={6}>
            <h1 className="text-center">Please Login</h1>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  required
                  ref={emailRef}
                  type="email"
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
                  ref={passwordRef}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              {errorElement}
              <Button
                className="btn btn-sm btn-outline-dark w-100 my-2"
                variant="light"
                type="submit"
              >
                SUBMIT
              </Button>
            </Form>
            <div className="mt-3">
              <p>
                New To Fragrantica?{" "}
                <Link
                  to="/register"
                  className="text-primary pe-auto"
                  onClick={navigateRegister}
                >
                  Please Register
                </Link>
              </p>
              <p>
                Forget Password?{" "}
                <button
                  className="btn btn-link text-primary pe-auto"
                  onClick={resetPassword}
                >
                  Reset Password
                </button>
              </p>
            </div>
            <SocialLogin />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
