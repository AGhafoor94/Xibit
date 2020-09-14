import React, { useState, createContext } from "react";
import Routes from "./Routes";

export const AppContext = createContext();

const App = () => {
  const [user, setUser] = useState({});
  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Routes />
    </AppContext.Provider>
  );
};

export default App;
