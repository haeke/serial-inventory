import React from "react";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./Login.css";

const Login = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    loginUser,
    validate
  );

  function loginUser() {
    // TODO - pass the values to the action creator for creating a user.
    console.log("called create user");
  }
  return (
    <section className="loginContainer">
      <div className="container">
        <div className="loginWrapper">
          <div className="row">
            <div className="col-md-5">
              <div className="row">
                <h1 className="registerHeader mainWhite">Login</h1>
              </div>
              <form onSubmit={handleSubmit} className="formContainer">
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
                  />
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
            <div className="loginFormWrapper">
              <h1 className="loginFormHeader">Dont have an Account?</h1>
              <Link to="/" className="loginLink">
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
