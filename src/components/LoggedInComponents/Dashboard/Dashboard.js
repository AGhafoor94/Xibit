import React, { useContext } from "react";
import AppContext from "../../../Context/AppContext";
import UserContext from "../../../Context/UserContext";
import Navigation from "../../Navigation/Navigation";

const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { selectedXibit } = useContext(AppContext);
  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Dashboard;
