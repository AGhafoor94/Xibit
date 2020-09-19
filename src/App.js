import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import UserContext from "./Context/UserContext";
import AppContext from "./Context/AppContext";

const App = () => {
  const [user, setUser] = useState({});
  const [selectedXibit, setSelectXibit] = useState("aquarium");
  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <AppContext.Provider value={{ selectedXibit, setSelectXibit }}>
          <Routes />
        </AppContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
