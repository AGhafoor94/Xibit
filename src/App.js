import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Row, Col } from "antd";

const App = () => {
  return (
    <div>
      <Row>
        <Col className="firstColumn" span={12}>
          col-12
        </Col>
        <Col className="secondColumn" span={12}>
          col-12
        </Col>
      </Row>
    </div>
  );
};
export default App;
