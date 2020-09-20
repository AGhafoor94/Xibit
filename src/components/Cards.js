import React from "react";

import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import { Button } from "antd";

export const Cards = ({ cardTitle, cardContent, onSubmit, onView }) => (
  <div className="site-card-wrapper">
    <Row style={{ width: "70%", display: "block", margin: "10px auto" }}>
      <Col>
        <Card title={cardTitle} bordered={false}>
          {cardContent}
        </Card>
        <Button onSubmit={onSubmit} type="primary" size="large">
          Add to Plan
        </Button>
        <Button
          onSubmit={onView}
          type="primary"
          danger
          size="large"
          style={{ float: "right" }}
        >
          View
        </Button>
      </Col>
    </Row>
  </div>
);
