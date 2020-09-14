import React from "react";
import "./App.css";
import { Row, Col, Form, Input, Checkbox, Button } from "antd";

const App = () => {
  return (
    <div>
      <Row style={{ height: "100vh" }}>
        <Col className="gutter-row" span={12}>
          <div>col-6</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div
            style={{
              width: "50%",
              margin: "50% auto",
              display: "block",
            }}
          >
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input placeholder="Username" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input type="password" placeholder="Password" />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "48%" }}
                >
                  Log in
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "48%", float: "right" }}
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
