import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "antd";
import "../index.css";

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
              margin: "10px 10px 0 0",
              display: "block",
              float: "right",
              backgroundColor: "#449D44",
              border: "#449D44",
            }}
            onClick={() => {
              console.log("register");
            }}
          >
            Sign Up
          </Button>
        </Link>
        <Link to="/login">
          <Button
            type="primary"
            style={{
              margin: "10px 10px 0 0",
              display: "block",
              float: "right",
              backgroundColor: "#669900",
              border: "#669900",
            }}
            onClick={() => {
              console.log("login");
            }}
          >
            Sign In
          </Button>
        </Link>
      </div>
      <div style={{ margin: "0 auto" }} className="rightComponent">
        <h1 style={{ textAlign: "center", fontSize: "7rem", color: "#FEA000" }}>
          {header}
        </h1>
        <NavLink to="/aquarium">
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
        </NavLink>
        <NavLink to="/safari">
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
        </NavLink>
      </div>
    </div>
  );
};

export default WelcomePageComponent;
