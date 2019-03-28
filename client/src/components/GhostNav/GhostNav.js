import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

import Button from "../Button/Button";

import "./GhostNav.css";

function GhostNav({ pageOffset }) {
  // Attach a ref to the nav to keep track of the height scrolled in comparison to the height of the nav.
  const scrolledHeight = useRef(null);
  // Apply the background class if scroll Y position is larger than the height of the nav.
  const [backgroundColor, updateBackground] = useState("");
  // We only want to update the background color if the value changes.
  useEffect(() => window.addEventListener("scroll", applyBackground), [
    backgroundColor
  ]);
  // The callback used to determine if the background should or should not be visible.
  const applyBackground = () => {
    return pageOffset < window.pageYOffset
      ? updateBackground("navBackground")
      : updateBackground("");
  };
  return (
    <nav
      className={classnames("nav", backgroundColor)}
      ref={scrolledHeight}
      onScroll={applyBackground}
    >
      <div className="logo">
        <Button as={Link} to="/" buttonStyle="logoLink">
          InvenTrack
        </Button>
      </div>
      <div className="links">
        <ul className="linkContainer">
          <li className="listItem">
            <Link to="/add" className="logoLink">
              Add
            </Link>
          </li>
          <li className="listItem">
            <Button as="a" href="#about">
              About
            </Button>
          </li>
          <li className="listItem">
            <Link to="/all" className="logoLink">
              All Software
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default GhostNav;
