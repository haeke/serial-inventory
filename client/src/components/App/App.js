import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import GhostNav from "../GhostNav/GhostNav";
import InventoryForm from "../InventoryForm/InventoryForm";
import InventoryList from "../InventoryList/InventoryList";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";

const App = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <div className="appRow">
          <Router>
            <GhostNav pageOffset={60} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/add" exact component={InventoryForm} />
              <Route path="/all" exact component={InventoryList} />
              <Route path="/login" exact component={Login} />
            </Switch>
            <Footer />
            <Modal />
          </Router>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = state => ({
  modal: state.modal
});

export default connect(mapStateToProps)(App);
