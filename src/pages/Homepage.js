import { Col, Layout, Row } from "antd";
import React from "react";
import WelcomePageComponent from "./Welcome";

const Homepage = () => {
  return (
    <div>
      <Layout>
        <Row style={{ height: "100vh" }}>
          <Col
            className="leftContainer gutter-row"
            span={12}
            style={{ backgroundColor: "#1F4366" }}
          >
            <div>component here</div>
          </Col>
          <Col className="rightComponent gutter-row " span={12}>
            <WelcomePageComponent header="Xibit" />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default Homepage;
