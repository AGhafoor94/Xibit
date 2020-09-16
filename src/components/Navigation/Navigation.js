import { Menu } from "antd";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../Context/UserContext";
import ProtectedRoutes from "../../Routes/ProtectedRoutes";

const Navigation = () => {
  const { user } = useContext(UserContext);
  if (user.token) return <ProtectedRoutes />;
  return (
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key="app">
        <NavLink to="/">
          <img className="ant-menu-item" alt="logo" />
        </NavLink>
      </Menu.Item>
      <Menu.Item key="login" style={{ float: "right" }}>
        <NavLink to="/login">Login</NavLink>
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
