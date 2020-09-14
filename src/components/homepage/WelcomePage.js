import Title from "antd/lib/skeleton/Title";
import React from "react";
import { Button } from "antd";

const WelcomePageComponent = ({ header }) => {
  return (
    <div style={{ marginTop: "20%" }}>
      <h1 style={{ textAlign: "center" }}>{header}</h1>
      <Button
        type="primary"
        style={{
          margin: "10px auto",
          display: "block",
          width: "80%",
          height: "200px",
          backgroundColor: "#669900",
          border: "#669900",
        }}
      >
        Aquariums
      </Button>
      <Button
        type="primary"
        style={{
          margin: "0 auto",
          display: "block",
          width: "80%",
          height: "200px",
          backgroundColor: "#669900",
          border: "#669900",
        }}
      >
        Safaris
      </Button>
    </div>
  );
};

export default WelcomePageComponent;
