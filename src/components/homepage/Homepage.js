import React from "react";
import BasePage from "../BasePage";
import WelcomePageComponent from "./WelcomePage";

const Homepage = () => {
  return (
    <div>
      <BasePage component={<WelcomePageComponent />} />
    </div>
  );
};

export default Homepage;
