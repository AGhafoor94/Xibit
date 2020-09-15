import Title from "antd/lib/skeleton/Title";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const WelcomePageComponent = ({ header }) => {
  return (
    <div>
      <div
        style={{
          display: "inline-block",
          width: "100%",
          margin: "0 auto",
          left: "20px",
        }}
      >
        <Link to="/register">
          <Button
            type="primary"
            style={{
              margin: "10px auto",
              display: "block",
              float: "right",
              backgroundColor: "#1F4366",
              border: "#1F4366",
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button
            type="primary"
            style={{
              margin: "10px auto",
              display: "block",
              float: "right",
              backgroundColor: "#1F4366",
              border: "#1F4366",
            }}
          >
            Sign In
          </Button>
        </Link>
      </div>
      <div style={{ margin: "50% auto" }}>
        <h1 style={{ textAlign: "center", fontSize: "7rem", color: "#FEA000" }}>
          {header}
        </h1>
        <Link to="/register">
          <Button
            type="primary"
            style={{
              margin: "10px auto",
              display: "block",
              width: "80%",
              height: "150px",
              backgroundColor: "#1F4366",
              fontSize: "2.5rem",
              border: "#1F4366",
            }}
          >
            Aquariums
          </Button>
        </Link>
        <Link to="/login">
          <Button
            type="primary"
            style={{
              margin: "0 auto",
              display: "block",
              width: "80%",
              height: "150px",
              backgroundColor: "#FEA000",
              border: "#FEA000",
              fontSize: "2.5rem",
            }}
          >
            Safaris
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePageComponent;
