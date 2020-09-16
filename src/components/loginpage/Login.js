import React, { useContext, useState } from "react";
import axios from "axios";
import BasePage from "../BasePage";
import LoginForm from "./LoginForm";
import UserContext from "../../Context/UserContext";

const URL = process.env.Url || "http://localhost:3001/auth/login";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = async () => {
    try {
      const { data } = await axios.post(URL, {
        email,
        password,
      });
      setUser(data);
    } catch (error) {
      setError(error.response.data.message);
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
            error={setError}
          />
        }
        colour="#FEA000"
      />
    </div>
  );
};

export default LoginPage;
