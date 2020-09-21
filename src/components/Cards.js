import React, { useContext } from "react";
import axios from "axios";

import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import { Button } from "antd";
import AppContext from "../context/AppContext";

const BASE_URL = process.env.Url || "http://localhost:3001/api";

export const Cards = ({ cardId, cardIndex, cardTitle, cardContent }) => {
  const { selectedPlan } = useContext(AppContext);
  const addToPlan = async () => {
    console.log(`${cardId} index: ${cardIndex}`);
    console.log(selectedPlan._id);
  };
  const viewPlace = () => {
    console.log("View");
  };
  return (
    <div className="site-card-wrapper">
      <Row style={{ width: "70%", display: "block", margin: "10px auto" }}>
        <Col>
          <Card title={cardTitle} bordered={false}>
            {cardContent}
          </Card>
          <Button onClick={addToPlan} type="primary" size="large">
            Add to Plan
          </Button>
          <Button
            onClick={viewPlace}
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
};

/*
{
    title: 'Plan 1',
    xibits: [],
    createdAt: Date.now(),
    userId: '',
  },
*/
