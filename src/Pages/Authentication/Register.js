import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import SocialLogin from "./SocialLogin";
import loginImage from "../../Images/login.jpg";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useToken from "../../hooks/useToken";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, error, loading] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  // const [token, setToken] = useState("");
  const navigate = useNavigate();
  const [token] = useToken(user);

  // genaret token start
  // useEffect(() => {
  //   const email = user?.user?.email;
  //   console.log(email);
  //   const currentUser = { email: email };
  //   if (email) {
  //     fetch(`https://fathomless-fjord-91095.herokuapp.com/user/${email}`, {
  //       method: "PUT",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       body: JSON.stringify(currentUser),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(
  //           "data inside token inside create email with pass : ",
  //           data
  //         );
  //         const accessToken = data.token;
  //         localStorage.setItem("accessToken", accessToken);
  //         setToken(accessToken);
  //       });
  //   }
  // }, [user]);
  // genaret token end
  useEffect(() => {
    if (token) {
      navigate("/products");
    }
    // eslint-disable-next-line no-use-before-define
  }, [navigate, token]);
  let errorElement;

  const navigateLogin = () => {
    navigate("/login");
  };

  if (loading || updating) {
    return <Loading />;
  }

  if (error || updateError) {
    errorElement = (
      <Alert variant="danger">This is a {error?.message} — check it out!</Alert>
    );
  }

  const onSubmit = async (data) => {
    if (agree) {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name });
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <Form.Text className="text-muted">
                {errors.name?.type === "required" && (
                  <span className="text-danger">{errors.name.message}</span>
                )}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
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
                type="password"
                placeholder="Password"
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
              />
              <Form.Text className="text-muted">
                {errors.password?.type === "required" && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-danger">{errors.password.message}</span>
                )}
              </Form.Text>
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
          {errorElement}
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
