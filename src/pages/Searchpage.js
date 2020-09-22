import React, { useContext, useState } from "react";
import axios from "axios";

import Search from "antd/lib/input/Search";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import { Radio } from "antd";
import UserContext from "../context/UserContext";

export const Searchpage = () => {
  const BASE_URL = process.env.URL || "http://localhost:3001/api";

  const [selectedState, setSelectedState] = useState("zoo");
  const { user } = useContext(UserContext);
  const onChange = (event) => {
    console.log(event.target.value);
    setSelectedState(event.target.value);
  };
  const options = [
    {
      label: "Search by Name",
      value: "zoo",
    },
    {
      label: "Search by PostCode",
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
          onSearch={(value) => {
            const { data } = axios.get(
              `${BASE_URL}/xibit/${selectedState}/search/${value}`,
              {
                headers: {
                  authorization: `Bearer ${user.token}`,
                },
              }
            );
          }}
        />
      </div>
    </div>
  );
};
