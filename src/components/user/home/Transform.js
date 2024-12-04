import React from 'react';
import { Card, Typography, Button } from 'antd';
import banner from "../../../assets/landing_page/banner_2.png"
import { CalendarOutlined } from "@ant-design/icons";
import transform_your_mind from "../../../assets/landing_page/transfrom_your_mind.png"
import vector from "../../../assets/landing_page/vector.png"

const { Title, Paragraph } = Typography;

const TransformYourMind = () => {
  return (
    <Card className="transform-your-mind" style={{padding: "50px 0px"}}>
      <div className="hero-image" style={{textAlign: "center"}}>
        <img src={banner} alt="Swirl background" width="50%"/>
      </div>
      <div className="content" style={{display:"flex", flexDirection: "column", alignItems: "center"}}>
        <div style={{width: "40%", textAlign: "right"}}>
            <img src={transform_your_mind} width="100%" style={{marginTop: 30}}/>
            <div>
                <img src={vector} width={200}/>
            </div>
        </div>
        <div style={{width: "100%", textAlign: "center"}}>
        <Paragraph style={{fontSize: 25, paddingInline: "10%", color: "#545454"}}>
          Automate demand forecasts for every day of the week, meal period, and hour. This allows a restaurant to drive more traffic during non-busy periods, optimise capacity utilisation during busy periods and have better staff, inventory and cash flow planning.
        </Paragraph>
        </div>
        <Button type="primary" size="large" style={{ backgroundColor: "#46B56F", borderRadius: "30px", padding: "25px", fontWeight:"bold" }}>
          <CalendarOutlined style={{ fontSize: "18px", marginRight: "3px" }} />
          Book a Session
        </Button>
      </div>
    </Card>
  );
};

export default TransformYourMind;