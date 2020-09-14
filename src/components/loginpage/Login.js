import React, { useState } from "react";
import axios from "axios";
import BasePage from "../BasePage";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    try {
      const { data } = await axios.post("http://localhost:3001/login", {
        email,
        password,
      });

      console.log(data.token);
    } catch (error) {
      if (error.response.data.message) {
        setStatusMessage(error.response.data.message);
      } else {
        setStatusMessage("Something went wrong with our servers!");
      }
    }
  };
  return (
    <div>
      <BasePage
        component={
          <LoginForm
            emailChange={onEmailChange}
            passwordChange={onPasswordChange}
            onSubmit={onSubmit}
          />
        }
      />
    </div>
  );
};

export default LoginPage;
