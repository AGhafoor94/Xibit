import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";
import "./index.css";
import Menu from "antd/lib/menu";
import AppContext from "../context/AppContext";
import Search from "antd/lib/input/Search";
import { Button, Dropdown } from "antd";

export const ProtectedRoutes = () => {
  const { user, setUser } = useContext(UserContext);
  const { plans, setPlans, selectedPlan, setSelectedPlan } = useContext(
    AppContext
  );

  const BASE_URL = process.env.URL || "http://localhost:3001";

  useEffect(() => {
    const getPlans = async () => {
      const { data } = await axios.get(`${BASE_URL}/api/plans`, {
        headers: {
          authorization: `Bearer ${user.token}`,
        },
      });
      setPlans(data);
    };
    getPlans();
  }, [user.token, setPlans, BASE_URL]);

  const plansMenu = (
    <Menu>
      {plans.length ? (
        plans.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              onClick={() => {
                setSelectedPlan(item);
              }}
            >
              {item.title}
            </Menu.Item>
          );
        })
      ) : (
        <Menu.Item>"No Plans"</Menu.Item>
      )}
    </Menu>
  );

  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="app">
        <NavLink to="/">Xibit</NavLink>
      </Menu.Item>
      <Menu.Item key="dashboard">
        <NavLink to="/xibits">Dashboard</NavLink>
      </Menu.Item>
      <Menu.Item key="plans">
        <NavLink to="/xibits/plans">Plans</NavLink>
      </Menu.Item>
      <Menu.Item key="search">
        <NavLink to="/xibits/search">Search</NavLink>
      </Menu.Item>
      <Menu.Item key="add-plan">
        <Search
          placeholder="Add a plan"
          enterButton="Add"
          size="large"
          onSearch={async (value) => {
            const { data } = await axios.post(
              `${BASE_URL}/api/plans`,
              { title: value, createdAt: Date.now() },
              {
                headers: {
                  authorization: `Bearer ${user.token}`,
                },
              }
            );
            const updatedPlans = [...plans, data];
            setPlans(updatedPlans);
          }}
        />
      </Menu.Item>

      <Menu.Item>
        <label>Selected plan: </label>
        <Dropdown overlay={plansMenu} placement="bottomCenter" arrow>
          <Button>{selectedPlan ? selectedPlan.title : "None"}</Button>
        </Dropdown>
      </Menu.Item>
      <Menu.Item
        key="logout"
        style={{ float: "right" }}
        onClick={() => setUser({})}
      >
        Logout
      </Menu.Item>
    </Menu>
  );
};
