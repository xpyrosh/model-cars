import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ variant }) => {
  return (
    <Spinner
      animation="border"
      variant={variant}
      role="status"
      style={{
        width: "3rem",
        height: "3rem",
        margin: ".5rem",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
