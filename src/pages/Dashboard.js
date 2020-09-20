import React, { useContext, useEffect } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";

import { Navigation } from "../components/navigation/Navigation";

const BASE_URL = process.env.Url || "http://localhost:3001/api";
export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { selectedXibit } = useContext(AppContext);
  const getXibits = async (user) => {
    const { data } = await axios.get(`${BASE_URL}/xibits/${selectedXibit}s`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
    console.log(data);
  };
  getXibits(user);

  return (
    <div>
      <Navigation />
    </div>
  );
};
