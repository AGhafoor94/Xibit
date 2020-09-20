import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import Routes from "./routes/Routes";
import UserContext from "./context/UserContext";
import AppContext from "./context/AppContext";

const App = () => {
  const [user, setUser] = useState({});
  const [selectedXibit, setSelectXibit] = useState("aquariums");
  const [plans, setPlans] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState();
  return (
    <HashRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <AppContext.Provider
          value={{
            selectedXibit,
            setSelectXibit,
            plans,
            setPlans,
            selectedPlan,
            setSelectedPlan,
          }}
        >
          <Routes />
        </AppContext.Provider>
      </UserContext.Provider>
    </HashRouter>
  );
};

export default App;
