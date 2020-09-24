import React, { useContext, useState, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import UserContext from "../../context/UserContext";

import { LoginForm } from "./LoginForm";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Layout from "antd/lib/layout";
import "./forms.css";

const BASE_URL = process.env.Url || "http://localhost:3001";

export const Login = () => {
  let history = useHistory();
  const { setUser } = useContext(UserContext);

  const [error, setError] = useState("");

  const onSubmit = async ({ email, password }) => {
    try {
      const { data } = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password,
      });
      const { token } = data;
      const user = { email, token };
      localStorage.setItem("user", JSON.stringify(user));

      setUser({ email, token });
      history.replace("/");
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
          >
          </Col>
          <Col className=" gutter-row " span={12}>
            <LoginForm onSubmit={onSubmit} error={setError} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};
