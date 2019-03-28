import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import GhostNav from "../GhostNav/GhostNav";
import InventoryForm from "../InventoryForm/InventoryForm";
import InventoryList from "../InventoryList/InventoryList";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const App = ({ modal }) => {
  return (
    <main className="container-fluid">
      <div className="row">
        <Router>
          <GhostNav pageOffset={60} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={InventoryForm} />
            <Route path="/all" exact component={InventoryList} />
          </Switch>
          <Footer />
          {modal.openModal === true && <Modal />}
        </Router>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(App);
