import React, { useContext } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Loginpage/Login";
import Plans from "../components/LoggedInComponents/Plans/Plans";
import Register from "../components/RegisterPage/Register";
import UserContext from "../Context/UserContext";
import Dashboard from "../components/LoggedInComponents/Dashboard/Dashboard";

const Routes = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            {user.token ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/dashboard" exact>
            {user.token ? <Dashboard /> : <Redirect to="/login" />}
          </Route>
          <Route path="/login" exact>
            {user.token ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/register" exact>
            {user.token ? <Redirect to="/login" /> : <Register />}
          </Route>
          <Route path="/plans" exact>
            {user.token ? <Plans /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
