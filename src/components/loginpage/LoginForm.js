import React from "react";
import { Form, Input, Button, Typography as Title, Alert } from "antd";

const LoginForm = ({ emailChange, passwordChange, onSubmit, error }) => {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "50% auto",
        width: "80%",
        display: "block",
        justifyContent: "center",
      }}
    >
      <Title
        style={{
          textAlign: "center",
          fontSize: "5rem",
          fontWeight: "600",
          color: "#FEA000",
        }}
      >
        Log In
      </Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onSubmit={onSubmit}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            placeholder="Username"
            style={{ padding: "10px" }}
            onChange={emailChange}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            type="password"
            placeholder="Password"
            style={{ padding: "10px" }}
            onChange={passwordChange}
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
        </Form.Item>
        {error ? <Alert message={error} type="error" /> : null}
      </Form>
    </div>
  );
};

export default LoginForm;
