import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import { BASE_URL } from "../api/constants";

import { Navigation } from "../components/navigation/Navigation";
import { Cards } from "../components/Cards";

export const Dashboard = () => {
  const { user } = useContext(UserContext);
  const { selectedXibit } = useContext(AppContext);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const getXibits = async () => {
      const { data } = await axios.get(
        `${BASE_URL}/api/xibits/${selectedXibit}s`,
        {
          headers: {
            authorization: `Bearer ${user.token}`,
          },
        }
      );
      setResults(data.queryResults);
    };
    getXibits();
  }, [selectedXibit, user.token]);

  const generateCards = (state) => {
    return state.map((item, index) => {
      return (
        <div key={index}>
          <Cards
            cardTitle={item.name}
            cardContent={item.address}
            cardId={item.id}
            cardIndex={index}
            photoRef={item.photos[0].photo_reference}
          />
        </div>
      );
    });
  };
  return (
    <div>
      <Navigation />
      {results ? generateCards(results) : <p>Loading...</p>}
    </div>
  );
};
