import React from "react";
import { Row, Col, Layout } from "antd";
import "./index.css";

const BasePage = ({ component, colour }) => {
  return (
    <div>
      <Layout>
        <Row style={{ height: "100vh" }}>
          <Col
            className="leftContainer gutter-row"
            span={12}
            style={{ backgroundColor: `${colour}` }}
          >
            <div>component here</div>
          </Col>
          <Col className="rightComponent gutter-row " span={12}>
            {component}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default BasePage;
