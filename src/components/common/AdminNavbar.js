import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <Menu mode="horizontal" theme="dark">
      <Menu.Item key="dashboard">
        <Link to="/admin/dashboard">Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="settings">
        <Link to="/admin/settings">Settings</Link>
      </Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );
};

export default AdminNavbar;
