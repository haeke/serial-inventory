import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import "./Button.css";

// We use the as property to allow a user to allow for using the button as an Anchor tag, a react router Link component and a button by default.

const Button = ({
  as: Element,
  buttonType,
  buttonStyle,
  children,
  ...props
}) => (
  <Element className={classnames("button", buttonStyle)} {...props}>
    {children}
  </Element>
);

Button.propTypes = {
  buttonStyle: PropTypes.string,
  children: PropTypes.node,
  props: PropTypes.node
};

Button.defaultProps = {
  buttonStyle: "primary",
  children: "Default Text",
  props: undefined
};

export default Button;
