import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import { Button, Card, Col, Row } from "antd";
import Input from "antd/lib/input/Input";

const BASE_URL = "http://localhost:3001/api/plans/";

export const Plans = () => {
  const { selectedPlan } = useContext(AppContext);
  const [planIndex, setPlanIndex] = useState([]);

  return (
    <div>
      <ProtectedRoutes />
      <div
        className="site-card-wrapper"
        style={{ width: "80%", display: "block", margin: "20px auto 0 auto" }}
      ></div>
      <div className="site-card-wrapper container">
        <Row style={{ width: "70%", display: "block", margin: "10px auto" }}>
          {selectedPlan ? (
            <Button
              style={{ width: "100%", display: "block", margin: "10px auto" }}
              type="primary"
              danger
              size="large"
            >
              Submit
            </Button>
          ) : null}
          <Col>
            {selectedPlan ? (
              selectedPlan.xibits.map((plan, index) => {
                return (
                  <div key={index}>
                    <Card
                      title={plan.name}
                      style={{
                        margin: "10px auto",
                        border: "2px solid #FEA000",
                      }}
                      bordered
                    >
                      <p>{plan.address}</p>
                      <label>Type in Order</label>
                      <Input
                        onChange={({ target }) => {
                          setPlanIndex({
                            id: plan._id,
                            index: target.value,
                          });
                        }}
                      />
                    </Card>
                  </div>
                );
              })
            ) : (
              <h2 style={{ textAlign: "center" }}>Please select a plan</h2>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};
