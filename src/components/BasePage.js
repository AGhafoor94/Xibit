import React from "react";
import { Row, Col } from "antd";

const BasePage = ({ component }) => {
  return (
    <div>
      <Row style={{ height: "100vh" }}>
        <Col
          className="gutter-row"
          span={12}
          style={{ backgroundColor: "orange" }}
        >
          <div>component here</div>
        </Col>
        <Col className="gutter-row" span={12}>
          {component}
        </Col>
      </Row>
    </div>
  );
};

export default BasePage;
