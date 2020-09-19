import React, { useContext } from "react";
import UserContext from "../../../Context/UserContext";
import Navigation from "../../Navigation/Navigation";

const Dashboard = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Dashboard;
