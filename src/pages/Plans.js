import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { ProtectedRoutes } from "../routes/ProtectedRoutes";

export const Plans = () => {
  const { selectedPlan } = useContext(AppContext);
  console.log(selectedPlan);
  return (
    <div>
      <ProtectedRoutes />
      <div
        className="container"
        style={{ width: "80%", display: "block", margin: "20px auto 0 auto" }}
      ></div>
    </div>
  );
};
