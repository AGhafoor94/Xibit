import React from "react";
import { Row, Col } from "antd";

const BasePage = () => {
  return (
    <div>
      <Row gutter={[8, 8]}>
        <Col span={12} />
        <Col span={12} />
      </Row>
    </div>
  );
};

export default BasePage;
