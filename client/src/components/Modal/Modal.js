import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { openModal, closeModal } from "../../actions/index";

import "./Modal.css";

// make sure that the modal doesn't close if you click anywhere on the Modal
const handleModal = event => {
  event.stopPropagation();
};

const Modal = ({ openModal, closeModal, modal }) => {
  return ReactDOM.createPortal(
    <div>
      <div id="modalDialog">
        <div className="modalContainer">
          <div className="">
            <Link to="/">
              <button
                className=""
                onClick={() => {
                  closeModal();
                }}
              >
                <p>Close Modal</p>
              </button>
            </Link>
            <Link to="/">
              <button className="" onClick={() => closeModal()}>
                Go To Home page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(
  mapStateToProps,
  { openModal, closeModal }
)(Modal);
