import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import InventoryForm from "../InventoryForm/InventoryForm";

const App = () => {
  return (
    <main className="container-fluid">
      <Router>
        <Switch>
          <Route path="/" exact component={InventoryForm} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
