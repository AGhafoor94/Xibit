import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";
import { Card, Col, Row } from "antd";

const BASE_URL = "http://localhost:3001/api/plans/";
export const Plans = () => {
  const { selectedPlan } = useContext(AppContext);
  return (
    <div>
      <ProtectedRoutes />
      <div
        className="site-card-wrapper"
        style={{ width: "80%", display: "block", margin: "20px auto 0 auto" }}
      ></div>
      <div className="site-card-wrapper container">
        <Row style={{ width: "70%", display: "block", margin: "10px auto" }}>
          <Col>
            {selectedPlan ? (
              selectedPlan.xibits.map((item, index) => {
                return (
                  <div id={index}>
                    <Card
                      title={item.name}
                      style={{
                        margin: "10px auto",
                        border: "2px solid #FEA000",
                      }}
                      bordered
                    >
                      <p>{item.address}</p>
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
