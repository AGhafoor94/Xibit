import React, { useContext } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Login from "../components/Loginpage/Login";
import Plans from "../components/LoggedInComponents/Plans/Plans";
import UserContext from "../Context/UserContext";
import Dashboard from "../components/LoggedInComponents/Dashboard/Dashboard";
import Homepage from "../components/Homepage/Homepage";
import Profile from "../components/LoggedInComponents/Profile/Profile";
import Register from "../components/RegisterPage/Register";

const Routes = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;
  console.log(user.token);

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
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
