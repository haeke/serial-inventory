import React from "react";
import { connect } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { validateRegister } from "../../utils/validate";
import { Link } from "react-router-dom";
import { registerUser } from "../../actions/loginActions";

import Button from "../Button/Button";

import "./Register.css";

const Register = ({ registerUser }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    registerUserHandler,
    validateRegister
  );

  function registerUserHandler() {
    // TODO - pass the values to the action creator for creating a user.
    console.log("called register User");
    registerUser(values);
  }
  return (
    <section className="loginContainer">
      <div className="container">
        <div className="loginBackground">
          <div className="loginWhite">
            <form onSubmit={handleSubmit} className="loginForm">
              <h1>Register</h1>
              <div className="formWrapper">
                <label htmlFor="Name" className="formLabel">
                  Name
                </label>
                <small
                  style={
                    errors.name
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.name}
                </small>
                <input
                  type="text"
                  className={`formInput ${errors.name && "redBorder"}`}
                  name="name"
                  value={values.name || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Email" className="formLabel">
                  Email
                </label>
                <small
                  style={
                    errors.email
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.email}
                </small>
                <input
                  type="email"
                  className={`formInput ${errors.email && "redBorder"}`}
                  name="email"
                  value={values.email || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <label htmlFor="Password">Password</label>
                <small
                  style={
                    errors.password
                      ? { visibility: "visible", color: "red" }
                      : { visibility: "hidden" }
                  }
                >
                  * {errors.password}
                </small>
                <input
                  type="password"
                  className={`formInput ${errors.password && "redBorder"}`}
                  name="password"
                  value={values.password || ""}
                  onChange={handleChange}
                />
              </div>
              <div className="formWrapper">
                <Button
                  as="button"
                  buttonStyle="primaryButton"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </div>
            </form>
          </div>
          <div className="registerWrapper">
            <div className="loginFormWrapper text-right">
              <h1 className="loginFormHeader">Already an Account?</h1>
              <Link to="/login" className="loginLink">
                Login Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  null,
  { registerUser }
)(Register);
