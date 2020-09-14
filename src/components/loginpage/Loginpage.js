import React from "react";
import BasePage from "../BasePage";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div>
      <BasePage component={<LoginForm />} colour="red" />
    </div>
  );
};

export default LoginPage;
