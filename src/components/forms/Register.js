import React, { useContext, useState, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../api/constants";

import UserContext from "../../context/UserContext";

import { RegisterForm } from "./RegisterForm";

import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Layout from "antd/lib/layout";
import "./forms.css";

export const Register = () => {
  let history = useHistory();

  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");

  const onSubmit = async ({ email, firstName, lastName, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/register`, {
        email,
        firstName,
        lastName,
        password,
      });
      const { token } = data;
      setUser({ email, token });
      history.replace("/login");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div>
      <Layout>
        <Row style={{ height: "100vh" }}>
          <Col
            className="gutter-row display"
            span={12}
            style={{ backgroundColor: "#FEA000" }}
          ></Col>
          <Col className="rightComponent gutter-row " span={12}>
            <RegisterForm onSubmit={onSubmit} error={setError} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};
