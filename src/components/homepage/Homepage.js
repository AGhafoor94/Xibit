import React from "react";
import BasePage from "../BasePage";
import WelcomePageComponent from "./WelcomePage";

const Homepage = () => {
  return (
    <div>
      <BasePage
        component={<WelcomePageComponent header="Xibit" />}
        colour="red"
      />
    </div>
  );
};

export default Homepage;
