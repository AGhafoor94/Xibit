import React, { forwardRef } from "react";

import Title from "antd/lib/typography";
import Form from "antd/lib/form";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import "../index.css";
import { NavLink } from "react-router-dom";

const RegisterForm = forwardRef(({ onSubmit, error }, ref) => (
  <div ref={ref} className="formComponent">
    <Title className="titleComponent">Register</Title>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onSubmit}
    >
      <Form.Item
        name="firstName"
        rules={[{ required: true, message: "Please input your Firstname!" }]}
      >
        <Input placeholder="First Name" style={{ padding: "10px" }} />
      </Form.Item>
      <Form.Item
        name="lastName"
        rules={[{ required: true, message: "Please input your Lastname!" }]}
      >
        <Input placeholder="Last Name" style={{ padding: "10px" }} />
      </Form.Item>
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
          to="/login"
          style={{
            width: "80%",
            height: "50px",
            display: "block",
            textAlign: "center",
            margin: "0 auto",
            fontSize: "1.2rem",
          }}
        >
          Already have an account? Sign in
        </NavLink>
      </Form.Item>
    </Form>
  </div>
));

export default RegisterForm;
