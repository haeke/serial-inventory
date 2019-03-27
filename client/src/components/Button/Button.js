import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

// We use the as property to allow a user to allow for using the button as an Anchor tag, a react router Link component and a button by default.

const Button = ({ as: Element, buttonType, children, ...props }) => (
  <Element
    className={classnames(
      "button",
      buttonType === "primary" ? "primaryButton" : "secondaryButton"
    )}
    {...props}
  >
    {children}
  </Element>
);

Button.propTypes = {
  Element: PropTypes.node,
  buttonType: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.node
};

Button.defaultProps = {
  Element: "button",
  buttonType: "primary",
  children: "Default Text",
  props: undefined
};

export default Button;
