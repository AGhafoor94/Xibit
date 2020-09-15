import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import BasePage from "../BasePage";
import WelcomePageComponent from "./WelcomePage";

const Homepage = () => {
  return (
    <div>
      <BasePage
        component={<WelcomePageComponent header="Xibit" />}
        colour="#1F4366"
      />
    </div>
  );
};

export default Homepage;
