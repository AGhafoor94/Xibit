import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";

import Title from "antd/lib/typography";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";

export const LoginForm = forwardRef(({ onSubmit, error }, ref) => (
  <div ref={ref} className="formComponent">
    <Title className="titleComponent">Log In</Title>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input placeholder="Username" style={{ padding: "10px" }} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          type="password"
          placeholder="Password"
          style={{ padding: "10px" }}
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{
            width: "80%",
            backgroundColor: "#669900",
            border: "#669900",
            height: "50px",
            fontSize: "1.5rem",
          }}
        >
          Submit
        </Button>
        <NavLink
          to="/register"
          style={{
            width: "80%",
            height: "50px",
            display: "block",
            textAlign: "center",
            margin: "0 auto",
            fontSize: "1.2rem",
          }}
        >
          Don't have an account? Register
        </NavLink>
      </Form.Item>
    </Form>
  </div>
));
