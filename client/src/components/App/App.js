import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../Home/Home";
import InventoryForm from "../InventoryForm/InventoryForm";
import InventoryList from "../InventoryList/InventoryList";

const App = () => {
  return (
    <main className="container-fluid">
      <div className="row">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/add" exact component={InventoryForm} />
            <Route path="/all" exact component={InventoryList} />
          </Switch>
        </Router>
      </div>
    </main>
  );
};

export default App;
