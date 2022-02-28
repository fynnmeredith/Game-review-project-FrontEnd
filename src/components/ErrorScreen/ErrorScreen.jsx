import React from "react";
import { Link } from "react-router-dom";
import "./ErrorScreen.css";

const ErrorScreen = () => {
  return (
    <>
      <h1 className="whoops">
        Whoops looks like you went down the wrong path...
      </h1>
      <div className="take">
        <button className="takeMeHome">
          <Link to={"/"}>Take me home</Link>
        </button>
      </div>
    </>
  );
};

export default ErrorScreen;
