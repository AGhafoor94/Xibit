import React from "react";

import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Layout from "antd/lib/layout";
import "./base.css";

const BasePage = (props, { colour }) => {
  return (
    <div>
      <Layout>
        <Row style={{ height: "100vh" }}>
          <Col
            id="leftContainer"
            className=" gutter-row"
            span={12}
            style={{ backgroundColor: `${colour}` }}
          >
            <div>component here</div>
          </Col>
          <Col className="rightComponent gutter-row " span={12}>
            {props.children}
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default BasePage;
