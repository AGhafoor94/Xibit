import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import Search from "antd/lib/input/Search";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import { Radio } from "antd";
import UserContext from "../context/UserContext";
import { SearchCard } from "../components/SearchCard";
import AppContext from "../context/AppContext";

const BASE_URL = process.env.URL || "http://localhost:3001/api";

export const Searchpage = () => {
  const [selectedState, setSelectedState] = useState("safari");
  const { user } = useContext(UserContext);
  const [getData, setData] = useState();
  const [visible, setVisible] = useState(false);
  const { setApiKey } = useContext(AppContext);

  useEffect(() => {
    const apiKeyValue = async () => {
      const data = await axios.get(`${BASE_URL}/key`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      console.log(data.data);
      setApiKey(data.data);
    };
    apiKeyValue();
  }, [setApiKey, user.token]);

  const onChange = ({ target }) => {
    setSelectedState(target.value);
  };
  const options = [
    {
      label: "Search Safaris",
      value: "safari",
    },
    {
      label: "Search Aquariums",
      value: "aquarium",
    },
    {
      label: "Search by Postcode",
      value: "postcode",
    },
  ];
  return (
    <div>
      <ProtectedRoutes />
      <div
        className="container"
        style={{ width: "80%", display: "block", margin: "20px auto 0 auto" }}
      >
        <Radio.Group
          options={options}
          onChange={onChange}
          value={selectedState}
          optionType="button"
          buttonStyle="solid"
        />
        <Search
          placeholder="Search"
          enterButton="Search"
          size="large"
          onSearch={async (value) => {
            const { data } = await axios.get(
              `${BASE_URL}/xibit/${selectedState}/search/${value}`,
              {
                headers: {
                  authorization: `Bearer ${user.token}`,
                },
              }
            );
            setData(data);
            setVisible(true);
          }}
        />
        {visible ? (
          <SearchCard lat={getData.lat} lng={getData.lng} data={getData} />
        ) : (
          <p>Please select search and type in query</p>
        )}
      </div>
    </div>
  );
};
