import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import UserContext from "./Context/UserContext";

const App = () => {
  const [user, setUser] = useState({});
  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes />
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
