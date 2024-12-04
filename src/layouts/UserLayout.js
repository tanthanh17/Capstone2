import React from "react";
import UserNavbar from "../components/common/UserNavbar";
import Footer from "../components/common/Footer";

const UserLayout = ({ children }) => {
  return (
    <div>
      <UserNavbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default UserLayout;
