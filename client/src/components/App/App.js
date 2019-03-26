import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InventoryForm from "../InventoryForm/InventoryForm";
import InventoryList from "../InventoryList/InventoryList";

const App = () => {
  return (
    <main className="container-fluid">
      <Router>
        <Switch>
          <Route path="/" exact component={InventoryForm} />
          <Route path="/all" exact component={InventoryList} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
