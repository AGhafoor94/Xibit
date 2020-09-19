import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import Navigation from "../components/navigation/Navigation";

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
