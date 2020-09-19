import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import Navigation from "../components/navigation/Navigation";

const BASE_URL = process.env.Url || "http://localhost:3001/api";
const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { selectedXibit } = useContext(AppContext);
  const getXibits = async (user) => {
    console.log(user.token);
    const { data } = await axios.post(
      `http://localhost:3001/api/xibits/aquariums`,
      {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      }
    );

    console.log({ data });
  };
  getXibits(user);

  return (
    <div>
      <Navigation />
    </div>
  );
};

export default Dashboard;
