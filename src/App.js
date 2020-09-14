import React from "react";
import "./App.css";
import {
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Button,
  Typography as Title,
} from "antd";

const App = () => {
  return (
    <div>
      <Row
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
        style={{ height: "100vh" }}
      >
        <Col
          className="gutter-row"
          span={12}
          style={{ backgroundColor: "orange" }}
        >
          <div>component here</div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div
            style={{
              width: "50%",
              margin: "50% auto",
              display: "block",
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
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your Username!" },
                ]}
              >
                <Input placeholder="Username" style={{ padding: "10px" }} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  type="password"
                  placeholder="Password"
                  style={{ padding: "10px" }}
                />
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
                  style={{
                    width: "48%",
                    backgroundColor: "#669900",
                    border: "#669900",
                  }}
                >
                  Log in
                </Button>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{
                    width: "48%",
                    backgroundColor: "#FEA000",
                    border: "#FEA000",
                    float: "right",
                  }}
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
