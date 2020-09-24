import React, { useContext, useState } from "react";
import axios from "axios";

import Card from "antd/lib/card";
import Col from "antd/lib/col";
import Row from "antd/lib/row";
import { Button } from "antd";
import AppContext from "../context/AppContext";
import UserContext from "../context/UserContext";
import Modal from "antd/lib/modal/Modal";

const BASE_URL = process.env.Url || "http://localhost:3001/api";

export const Cards = ({ cardId, cardTitle, cardContent, photoRef }) => {
  const { selectedPlan } = useContext(AppContext);
  const { user } = useContext(UserContext);
  const [visible, setVisible] = useState();

  const addToPlan = async () => {
    const xibit = {
      placeId: cardId,
      name: cardTitle,
      address: cardContent,
      createdAt: Date.now(),
    };
    await axios.put(`${BASE_URL}/plans/${selectedPlan._id}`, xibit, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
  };
  const viewPlace = async () => {
    const { data } = axios.get(`${BASE_URL}/xibit/${photoRef}`, {
      headers: {
        authorization: `Bearer ${user.token}`,
      },
    });
  };
  return (
    <div className="site-card-wrapper">
      <Row style={{ width: "70%", display: "block", margin: "10px auto" }}>
        <Col>
          <Card
            title={cardTitle}
            style={{
              margin: "10px auto",
              border: "2px solid #FEA000",
            }}
            bordered
          >
            {cardContent}
          </Card>
          <Button onClick={addToPlan} type="primary" size="large">
            Add to Plan
          </Button>
          <Button
            onClick={() => {
              setVisible(true);
            }}
            type="primary"
            danger
            size="large"
            style={{ float: "right" }}
          >
            View
          </Button>
        </Col>
        <Modal
          title={cardTitle}
          visible={visible}
          onOk={() => {
            setVisible(false);
          }}
          onCancel={() => {
            setVisible(false);
          }}
        >
          <p>{cardContent}</p>
          <p>{cardTitle}</p>
        </Modal>
      </Row>
    </div>
  );
};
