import React from "react";
import "./style/master.scss"; // global styles
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppTemplate from "./components/ui/AppTemplate";
import Work from "./components/pages/Work";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <AppTemplate>
      <Router>
        <Switch>
          <Route exact path="/" component={Work} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </Router>
    </AppTemplate>
  );
}

export default App;
