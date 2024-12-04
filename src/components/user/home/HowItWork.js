import React from "react";
import { Row, Col, Card, Typography } from "antd";
import landing_3 from "../../../assets/icon/icon_landing_3.png"
import landing_2 from "../../../assets/icon/icon_landing_2.png"
import landing_1 from "../../../assets/icon/icon_landing_1.png"
import bg_howitwork from "../../../assets/landing_page/bg_howitwork.png"
import how_it_work from "../../../assets/landing_page/How_it_Works.png"


const { Title, Text } = Typography;

const HowItWorks = () => {
  // Steps data for the "How it Works" section
  const steps = [
    {
      title: "Let’s Meet",
      description:
        "Connect with us through a call or video to understand your requirements and goals.",
      icon: <img src={landing_3} width={80}/>
    },
    {
      title: "Discover What You Need",
      description:
        "Discuss and identify the specific areas you want to focus on for your hypnotherapy treatment.",
        icon: <img src={landing_1} width={80}/>
    },
    {   
      title: "Treatment",
      description:
        "Experience personalized hypnotherapy sessions tailored to help you achieve your desired outcomes.",
        icon: <img src={landing_2} width={80}/>
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${bg_howitwork})`,
        padding: "100px 100px", // Padding for the section
        textAlign: "center", // Center align all content
        color: "#fff", // White text color for readability
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxSizing: "border-box",
        margin: 0,
        backgroundColor: "#202939"
      }}
    >
    <div style={{display:"flex", alignItems: "center"}}>
      {/* Section title */}
      <Title level={2} style={{ display:"flex",color: "#fff", marginBottom: "20px", width:"50%", fontSize: 60, alignItems:"end"}}>
        How it Works <span style={{borderRadius: "100%",width: 16, height:16, backgroundColor: "#38B0CD", marginBottom: 15, marginLeft: 5}}/>
      </Title>

      {/* Section description */}
      <Text
        style={{
          fontSize: "20px", // Slightly larger font for readability
          lineHeight: "1.6", // Add line spacing for better readability
          margin: "0 auto", // Center the description block
          display: "block",
          color: "white",
          textAlign: "left",
          width: "50%",
          padding: 20
        }}
      >
        At <b>“Go For It Hypnotherapy”</b>, Stella Dichiera uses hypnotherapy to
        help clients make lasting changes, such as quitting smoking or losing
        weight. Sessions are personalized, with services like the Virtual
        Gastric Band for weight loss, all delivered in person.
      </Text>
    </div>

      {/* Steps section */}
      <Row gutter={[24, 24]} style={{ marginTop: "40px" }}>
        {steps.map((step, index) => (
          <Col xs={24} sm={24} md={8} key={index}>
            {/* Each step is displayed in a Card */}
            <Card
              style={{
                backgroundColor: "#192734", // Darker background color for contrast
                border: "none", // Remove default border
                borderRadius: "10px", // Rounded corners for a modern look
                height: "100%", // Make all cards the same height
                padding: 20
              }}
            >
              {/* Step icon */}
              <div
                style={{
                  fontSize: 80, // Larger font size for the icon
                  color: "#38B0CD", // Use a distinct color for icons
                  marginBottom: "20px", // Add spacing below the icon
                  display: "flex"
                }}
              >
                {step.icon}
              </div>

              {/* Step title */}
              <Title level={3} style={{ color: "#fff", marginBottom: "10px", textAlign: "left", fontSize: 25 }}>
                {step.title}
              </Title>

              {/* Step description */}
              <Text
                style={{
                color: "#aaa", // Light gray color for description
                textAlign: "left", // Align text to the left
                display: "-webkit-box", // Required for line-clamp to work
                WebkitLineClamp: 3, // Limit the text to 3 lines
                WebkitBoxOrient: "vertical", // Required for line-clamp to work
                overflow: "hidden", // Hide overflow content
                textOverflow: "ellipsis", // Add ellipsis (...) for overflow text
                fontSize: 20
                }}
            >
                {step.description}
            </Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorks;
