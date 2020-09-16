import React from "react";
import { Row, Col, Layout } from "antd";

const BasePage = ({ component, colour }) => {
  return (
    <div>
      <Layout>
        <Row style={{ height: "100vh" }}>
          <Col
            className="gutter-row"
            span={12}
            style={{ backgroundColor: `${colour}` }}
          >
            <div>component here</div>
          </Col>
          <Col className="gutter-row" span={12}>
            {component}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default BasePage;
