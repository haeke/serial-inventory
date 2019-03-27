import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

const Button = ({ buttonType, children, props }) => (
  <button
    className={classnames(
      "button",
      buttonType === "primary" ? "primaryButton" : "secondaryButton"
    )}
    {...props}
  >
    {children}
  </button>
);

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node
};

export default Button;
