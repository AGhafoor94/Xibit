import { Col, Layout, Row } from "antd";
import React from "react";
import { Welcome } from "./Welcome";

export const Homepage = () => (
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
          <Welcome header="Xibit" />
        </Col>
      </Row>
    </Layout>
  </div>
);
