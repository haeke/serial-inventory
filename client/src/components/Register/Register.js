import React from "react";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";
import { Link } from "react-router-dom";

import Button from "../Button/Button";

import "./Register.css";

const Register = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    registerUser,
    validate
  );

  function registerUser() {
    // TODO - pass the values to the action creator for creating a user.
    console.log("called register User");
  }
  return (
    <section className="loginContainer">
      <div className="container">
        <div className="loginWrapper">
          <div className="row">
            <div className="col-md-12 brandColorBackground curvedEdges">
              <div className="col-md-5 col-sm-12">
                <div className="row">
                  <h1 className="mainWhite">Register</h1>
                </div>
                <form onSubmit={handleSubmit} className="formContainer">
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
              <div className="col-md-7 col-sm-12">
                <div className="loginFormWrapper text-right">
                  <h1 className="loginFormHeader">Already Have an Account?</h1>
                  <Link to="/login" className="loginLink">
                    Login Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
