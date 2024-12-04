import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLayout from "./layouts/UserLayout";
import AdminLayout from "./layouts/AdminLayout";
import AccountLayout from "./layouts/AccountLayout";

import Home from "./pages/user/Home";
import CommingSoon from "./pages/user/CommingSoon";
import Login from "./pages/account/Login";
import Signup from "./pages/account/SignUp";
import RecoverPassword from "./pages/account/RecoverPassword";
import VerifyOTP from "./pages/account/VerifyOTP";

import Booking from "./pages/user/Booking";

// import Dashboard from "./pages/admin/Dashboard";
// import Settings from "./pages/admin/Settings";
// import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route User */}
        <Route
          path="*"
          element={
            <UserLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<CommingSoon />} />
                <Route path="/pricing" element={<CommingSoon />} />
                <Route path="/contact" element={<CommingSoon />} />
                <Route path="/booking" element={<Booking />} />
              </Routes>
            </UserLayout>
          }
        />

        {/* Route Account */}
        <Route
          path="/account/*"
          element={
            <AccountLayout>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/reset-password" element={<RecoverPassword />} />
                <Route path="/verify-otp" element={<VerifyOTP />} />
              </Routes>
            </AccountLayout>
          }
        />

        {/* Route Admin */}
        {/* <Route
          path="/admin/*"
          element={
            <AdminLayout>
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="settings" element={<Settings />} />
              </Routes>
            </AdminLayout>
          }
        /> */}

        {/* Route Not Found */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
