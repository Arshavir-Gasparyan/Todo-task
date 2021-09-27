import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LogIn from "./Components/LogInForm/LogIn";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
