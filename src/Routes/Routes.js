import React, { useContext } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Loginpage/Login";
import Plans from "../components/LoggedInComponents/Plans/Plans";
import UserContext from "../Context/UserContext";
import Dashboard from "../components/LoggedInComponents/Dashboard/Dashboard";
import Homepage from "../components/Homepage/Homepage";
import Profile from "../components/LoggedInComponents/Profile/Profile";

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
            <Login formState="login" />
          </Route>
          <Route path="/register" exact>
            <Login formState="register" />
          </Route>
          <Route path="/plans" exact>
            {user.token ? <Plans /> : <Redirect to="/login" />}
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
