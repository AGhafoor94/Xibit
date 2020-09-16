import React, { useState } from "react";
import axios from "axios";
import BasePage from "../BasePage";
import RegisterForm from "./RegisterForm";

const Register = () => {
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
    try {
      const { data } = await axios.post("http://localhost:3001/register", {
        email,
        firstName,
        lastName,
        password,
      });

      console.log(data.token);
    } catch (error) {
      setError(error.message);
    }
  };
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
};

export default Register;
