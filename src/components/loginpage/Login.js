import React, { useContext, useState, forwardRef } from "react";

import { useHistory } from "react-router-dom";
import axios from "axios";
import LoginForm from "./LoginForm";
import UserContext from "../../Context/UserContext";
import { Col, Layout, Row } from "antd";

const BASE_URL = process.env.Url || "http://localhost:3001";

const LoginPage = () => {
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
      setUser({ email, token });
      history.replace("/dashboard");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <Layout>
        <Row style={{ height: "100vh" }}>
          <Col
            className="gutter-row"
            span={12}
            style={{ backgroundColor: "#FEA000" }}
          >
            <h1>component here</h1>
          </Col>
          <Col className=" gutter-row " span={12}>
            <LoginForm onSubmit={onSubmit} error={setError} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default LoginPage;
