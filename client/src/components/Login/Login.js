import React from "react";
import { useForm } from "../../hooks/useForm";
import { validate } from "../../utils/validate";

const Login = () => {
  //
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
        <div className="row">
          <h1 className="registerHeader">Register</h1>
        </div>
        <div className="row">
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
                <small style={errors.password ? { visibility: "visible", color: "red"} : {visibility: "hidden" }}></small>
                <input type="password" className={`formInput ${errors.password && "redBorder"}`} name="password" value={values.password || ""} onChange={handleChange} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
