import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";

function PageNotFound() {
  return (
    <div className="center">
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <p className="padding-top">
        <Router>
          <Switch>
            <Route component={Login} />
          </Switch>
        </Router>
        {/* <NavLink className="click-here" to="/">
          Click here
        </NavLink>{" "} */}
        to go back to home page
      </p>
    </div>
  );
}

export default PageNotFound;
