import React, { useEffect } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";
import loginImage from "../../Images/login.jpg";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  let errorElement;

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (error) {
    errorElement = (
      <Alert variant="danger">This is a {error?.message} — check it out!</Alert>
    );
  }
  if (loading) {
    return <Loading />;
  }

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                  type="email"
                  placeholder="Enter email"
                />
                <Form.Text className="text-muted">
                  {errors.email?.type === "required" && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="text-danger">{errors.email.message}</span>
                  )}
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                  type="password"
                  placeholder="Password"
                />
                <Form.Text className="text-muted">
                  {errors.password?.type === "required" && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-danger">
                      {errors.password.message}
                    </span>
                  )}
                </Form.Text>
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
                You haven't any account?{" "}
                <Link
                  to="/register"
                  className="text-primary pe-auto"
                  onClick={navigateRegister}
                >
                  Please Register
                </Link>
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
