import React, { useContext, useState } from "react";
import axios from "axios";
import BasePage from "../BasePage";
import LoginForm from "./LoginForm";
import UserContext from "../../Context/UserContext";
import RegisterForm from "../RegisterPage/RegisterForm";

const LOGIN_URL = process.env.Url || "http://localhost:3001/auth/login";
const REGISTER_URL = process.env.Url || "http://localhost:3001/auth/register";

const LoginPage = ({ formState }) => {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const onFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const onLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onSubmit = async () => {
    if (formState === "register") {
      try {
        const { data } = await axios.post(REGISTER_URL, {
          email,
          firstName,
          lastName,
          password,
        });
        setUser(data);
      } catch (error) {
        setError(error.message);
      }
    } else if (formState === "login") {
      try {
        const { data } = await axios.post(LOGIN_URL, {
          email,
          password,
        });
        setUser(data);
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };
  if (formState === "login") {
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
  } else if (formState === "register") {
    return (
      <div>
        <BasePage
          component={
            <RegisterForm
              emailChange={onEmailChange}
              passwordChange={onPasswordChange}
              firstNameChange={onFirstNameChange}
              lastNameChange={onLastNameChange}
              onSubmit={onSubmit}
              error={setError}
            />
          }
          colour="#FEA000"
        />
      </div>
    );
  }
};

export default LoginPage;
