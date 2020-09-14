import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { AppContext } from "./App";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Loginpage/Login";
import Navigation from "./components/Navigation/Navigation";

const Routes = () => {
  const appContext = useContext(AppContext);
  const { user } = appContext;

  console.log(user);

  return (
    <HashRouter>
      <div>
        <Navigation />

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            <Homepage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
