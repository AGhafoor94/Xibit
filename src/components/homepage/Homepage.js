import React from "react";
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
