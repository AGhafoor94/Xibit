import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";

import { Navigation } from "../components/navigation/Navigation";
import { Cards } from "../components/Cards";

const BASE_URL = process.env.Url || "http://localhost:3001/api";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { selectedXibit } = useContext(AppContext);
  const [results, setResults] = useState([]);
  const [plans, selectedPlans] = useState();

  useEffect(() => {
    const getXibits = async (user) => {
      const { data } = await axios.get(`${BASE_URL}/xibits/${selectedXibit}s`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      setResults(data.queryResults);
      console.log(data);
    };
    getXibits(user);
  }, []);
  const generateCards = (state) => {
    return state.map((item, index) => {
      return (
        <div key={index}>
          <Cards cardTitle={item.name} cardContent={item.address} />
        </div>
      );
    });
  };

  return (
    <div>
      <Navigation />
      {results ? generateCards(results) : null}
    </div>
  );
};
