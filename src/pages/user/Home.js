import React from "react";
import { Button } from "antd";
import banner from "../../assets/landing_page/banner_1.jpeg"
import vector_2 from "../../assets/landing_page/vector_2.png"
import { CalendarOutlined } from "@ant-design/icons";
import HowItWorks from "../../components/user/home/HowItWork";
import TransformYourMind from "../../components/user/home/Transform";
import LatestBlogPosts from "../../components/user/home/LatestBlogPost";
import FAQ from "../../components/user/home/FAQ";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "60px 20px",
          textAlign: "center",
          color: "#fff",
          height: "95vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src={vector_2} width={100} height={100} alt="Logo"/>
        <h1 style={{ fontSize: "50px", fontWeight: "bold" }}>
          Go For It Hypnotherapy
        </h1>
        <p style={{ fontSize: "28px", marginBottom: "20px" }}>
          Overcome the unconscious mind and break through the bad habits
        </p>
        <Button type="primary" size="large" style={{ backgroundColor: "#46B56F", borderRadius: "30px", padding: "25px", fontWeight:"bold" }}>
          <Link to="/booking"  style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CalendarOutlined style={{ fontSize: "18px", marginRight: "10px" }} />
            Book a Session
          </Link>
        </Button>
      </div>

      {/* How It Works Section */}
      <HowItWorks/>

      <TransformYourMind/>

      <LatestBlogPosts />

      <FAQ />
    </div>
  );
};

export default Home;
