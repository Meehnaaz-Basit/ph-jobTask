import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h2>this is welcome page </h2>
      <div>
        <Link to="/login">
          <button>login</button>
        </Link>
        <br />
        <Link to="/register">
          <button>register</button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
