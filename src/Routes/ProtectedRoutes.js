import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../context/UserContext";
import axios from "axios";

import Menu from "antd/lib/menu";
import { Button, Dropdown } from "antd";
import Search from "antd/lib/input/Search";
import AppContext from "../context/AppContext";

export const ProtectedRoutes = () => {
  const { user, setUser } = useContext(UserContext);
  const { plans, setPlans, selectedPlan, setSelectedPlan } = useContext(
    AppContext
  );
  const BASE_URL = process.env.Url || "http://localhost:3001";
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
  }, [user.token, setPlans]);

  const plansMenu = (
    <Menu>
      {plans.map((item, index) => {
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
          onSearch={(value) => {
            setPlans(value);

            const { data } = axios.post(
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
      {plans.length ? (
        <Menu.Item>
          <label>Selected plan: </label>
          <Dropdown overlay={plansMenu} placement="bottomCenter" arrow>
            <Button>{selectedPlan ? selectedPlan : "None"}</Button>
          </Dropdown>
        </Menu.Item>
      ) : null}
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
