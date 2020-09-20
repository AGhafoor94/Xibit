import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

import Menu from "antd/lib/menu";
import { Button, Dropdown, Input } from "antd";
import Search from "antd/lib/input/Search";
import AppContext from "../context/AppContext";

export const ProtectedRoutes = () => {
  const { setUser } = useContext(UserContext);
  const { plans, setPlans, selectedPlan, setSelectedPlan } = useContext(
    AppContext
  );

  const mockPlans = ["test", "two"];
  const plansMenu = (
    <Menu>
      {mockPlans.map((item, index) => {
        return (
          <Menu.Item
            onClick={() => {
              setSelectedPlan(item);
            }}
          >
            {item}
          </Menu.Item>
        );
      })}
    </Menu>
  );

  const token = localStorage.getItem("token");
  if (token) {
    return (
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="app">
          <NavLink to="/">
            <img className="ant-menu-item" src="" alt="logo" />
          </NavLink>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <NavLink to="/dashboard">Dashboard</NavLink>
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
            onSearch={(value) => setPlans(value)}
          />
        </Menu.Item>
        <Menu.Item>
          <label>Selected plan: </label>
          <Dropdown overlay={plansMenu} placement="bottomCenter" arrow>
            <Button>{selectedPlan ? selectedPlan : "None"}</Button>
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
  }
};
