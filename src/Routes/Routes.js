import React, { useContext } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";

import { Login } from "../components/forms/Login";
import { Plans } from "../pages/Plans";
import { Dashboard } from "../pages/Dashboard";
import { Homepage } from "../pages/Homepage";
import { Profile } from "../pages/Profile";
import { Register } from "../components/forms/Register";

const Routes = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/dashboard" exact>
            {user.token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/plans" exact>
            {user.token ? <Plans /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile" exact>
            {user.token ? <Profile /> : <Redirect to="/login" />}
          </Route>
          <Route path="/xibits/aquariums" exact>
            {user.token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/xibits/safaris" exact>
            {user.token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
