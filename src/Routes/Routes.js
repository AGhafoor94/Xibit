import React, { useContext } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import UserContext from "../context/UserContext";

import { Login } from "../components/forms/Login";
import { Plans } from "../pages/Plans";
import { Dashboard } from "../pages/Dashboard";
import { Homepage } from "../pages/Homepage";
import { Profile } from "../pages/Profile";
import { Register } from "../components/forms/Register";
import { Searchpage as Search } from "../pages/Searchpage";

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
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/xibits" exact>
            {user.token ? <Homepage /> : <Redirect to="/login" />}
          </Route>
          <Route path="/xibits/aquarium" exact>
            {user.token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/xibits/safari" exact>
            {user.token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/xibits/plans" exact>
            {user.token ? <Plans /> : <Redirect to="/login" />}
          </Route>
          <Route path="/xibits/search" exact>
            {user.token ? <Search /> : <Redirect to="/login" />}
          </Route>
          <Route path="/profile" exact>
            {user.token ? <Profile /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
