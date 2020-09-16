import React, { useContext } from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../components/Homepage/Homepage";
import Login from "../components/Loginpage/Login";
import Plans from "../components/Plans/Plans";
import Register from "../components/RegisterPage/Register";
import UserContext from "../Context/UserContext";

// const UnauthorisedWrapper = (props) => {
//   return (
//     <div>
//       <p>Please login before accessing the welcome page</p>
//       {props.children}
//     </div>
//   );
// };
const Routes = () => {
  const userContext = useContext(UserContext);
  const { user } = userContext;

  console.log(user);

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            {user.token ? <Redirect to="/" /> : <Login />}
          </Route>
          <Route path="/login" exact>
            {user.token ? <Redirect to="/dashboard" /> : <Login />}
          </Route>
          <Route path="/register" exact>
            {user.token ? <Redirect to="/dashboard" /> : <Register />}
          </Route>
          <Route path="/plans">
            {user.token ? <Redirect to="/login" /> : <Plans />}
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
