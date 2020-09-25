import React, { useContext, useState, forwardRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../api/constants";

import UserContext from "../../context/UserContext";

import { LoginForm } from "./LoginForm";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Layout from "antd/lib/layout";
import "./forms.css";

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
        <Row type="flex" style={{ height: "100vh" }}>
          <Col
            className="gutter-row display"
            span={12}
            style={{ backgroundColor: "#FEA000" }}
          ></Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className=" gutter-row "
            span={12}
          >
            <div style={{ display: "inline-block", verticalAlign: "middle" }}>
              <LoginForm onSubmit={onSubmit} error={setError} />
            </div>
          </Col>
        </Row>
      </Layout>
    </div>
  );
};
