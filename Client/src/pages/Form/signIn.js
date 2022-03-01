import React, { useState } from "react";
import "./Form.css";
import FormSignin from "./FormSignin";
import img2 from "../img/img-2.svg";

const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <div className="form-container">
      <span className="close-btn">x</span>
      <div className="form-content-left">
        <img className="form-img" src={img2} alt="spaceship" />
      </div>
      <FormSignin />
    </div>
  );
};

export default SignIn;
