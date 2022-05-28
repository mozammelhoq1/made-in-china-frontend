import React, { useEffect } from "react";
import { Alert, Button } from "react-bootstrap";
import auth from "../../firebase.init";
import google from "../../Images/google.png";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let errorElement;
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, from, navigate]);
  if (loading) {
    return <Loading />;
  }
  if (error) {
    errorElement = (
      <Alert variant="danger">This is a {error?.message} — check it out!</Alert>
    );
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
        <p className="mt-2 px-2">or</p>
        <div style={{ height: "2px" }} className="bg-dark w-50"></div>
      </div>
      {errorElement}
      <div>
        <Button
          variant="light"
          className="btn btn-sm btn-outline-dark d-block mx-auto"
          onClick={() => signInWithGoogle()}
        >
          <img
            style={{
              width: "30px",
            }}
            src={google}
            alt=""
          />
          <span className="px-3">Sign In With Google</span>
        </Button>
      </div>
    </div>
  );
};

export default SocialLogin;
