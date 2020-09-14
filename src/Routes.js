import React, { useContext } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { AppContext } from "./App";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Loginpage/Login";

// const UnauthorisedWrapper = (props) => {
//   return (
//     <div>
//       <p>Please login before accessing the welcome page</p>
//       {props.children}
//     </div>
//   );
// };
const Routes = () => {
  const appContext = useContext(AppContext);
  const { user } = appContext;

  console.log(user);

  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/welcome">
            {user.token ? (
              <Homepage />
            ) : (
              //<UnauthorisedWrapper>
              <Homepage />
              //</UnauthorisedWrapper>
            )}
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Routes;
