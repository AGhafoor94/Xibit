import React, { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "../context/UserContext";
import AppContext from "../context/AppContext";

import { Button } from "antd";

export const Welcome = ({ header }) => {
  const { user } = useContext(UserContext);
  const { setSelectXibit } = useContext(AppContext);
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
          >
            Sign In
          </Button>
        </Link>
      </div>
      <div style={{ margin: "0 auto" }} className="rightComponent">
        <h1 style={{ textAlign: "center", fontSize: "7rem", color: "#FEA000" }}>
          {header}
        </h1>
        <Link to="/xibits/aquariums">
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
            onClick={() => {
              setSelectXibit("aquarium");
            }}
          >
            Aquariums
          </Button>
        </Link>
        <Link to="/xibits/safari">
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
            onClick={() => {
              setSelectXibit("safari");
            }}
          >
            Safaris
          </Button>
        </Link>
      </div>
    </div>
  );
};
