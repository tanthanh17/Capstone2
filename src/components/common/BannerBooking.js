import React from "react";
import banner from "../../assets/landing_page/banner_1.jpeg"
import { Typography } from "antd";

const {Text} = Typography

const BannerBooking = () => {
  return (
    <div style={{marginBottom:50}}>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
          textAlign: "center",
          color: "#fff",
          height: "30vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{color: "white", fontSize: 40, fontWeight: "bold"}}>Book Appointment</Text>
      </div>
    </div>
  );
};

export default BannerBooking;
