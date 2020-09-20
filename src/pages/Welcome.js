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
          <Link to="/register">Sign Up</Link>
        </Button>

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
          <Link to="/login">Sign In</Link>
        </Button>
      </div>
      <div style={{ margin: "0 auto" }} className="rightComponent">
        <h1 style={{ textAlign: "center", fontSize: "7rem", color: "#FEA000" }}>
          {header}
        </h1>

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
          <Link to="/xibits/aquariums">Aquariums</Link>
        </Button>
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
          <Link to="/xibits/safaris">Safaris</Link>
        </Button>
      </div>
    </div>
  );
};
