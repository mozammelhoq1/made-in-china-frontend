import React from "react";
import { SpinnerDotted } from "spinners-react";

const Loading = () => {
  return (
    <div className="w-100 d-flex justify-content-center align-items-center my-5">
      <SpinnerDotted thickness={200} size={150} color="gray" speed={100} />
    </div>
  );
};

export default Loading;
