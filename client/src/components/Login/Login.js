import React from "react";
import { connect } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { validateLogin } from "../../utils/validate";
import { Link } from "react-router-dom";

import { loginUser } from "../../actions/loginActions";

import Button from "../Button/Button";

import "./Login.css";

const Login = ({ loginUser }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    handleLogin,
    validateLogin
  );

  function handleLogin() {
    // TODO - pass the values to the action creator for creating a user.
    loginUser(values);
  }
  return (
    <section className="loginContainer">
      <div className="container">
        <div className="col-md-12">
          <div className="loginBackground">
            <div className="loginWhite">
              <form onSubmit={handleSubmit} className="loginForm">
                <h1>Login</h1>
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
                    buttonStyle="loginButton"
                    onClick={handleSubmit}
                  >
                    Login
                  </Button>
                </div>
              </form>
            </div>
            <div className="registerWrapper">
              <div className="loginFormWrapper text-right">
                <h1 className="loginFormHeader">Dont have an Account?</h1>
                <Link to="/register" className="loginLink">
                  Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default connect(
  null,
  { loginUser }
)(Login);
