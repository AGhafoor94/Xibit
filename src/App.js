import React, { createContext } from "react";
import Routes from "./Routes";

export const AppContext = createContext();

const initialState = { user: null };

const App = () => {
  return (
    <AppContext.Provider value={initialState}>
      <Routes />
    </AppContext.Provider>
  );
};

export default App;
