import React from "react";
import { Form, Input, Button, Typography } from "antd";
import logo from "../../assets/logo.png"
const { Text, Link } = Typography;

const VerifyOTP = () => {
  const onFinish = (values) => {
    console.log("OTP Submitted:", values.otp);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "400px", background: "#fff", padding: "20px", borderRadius: "8px" }}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img src={logo} alt="Logo" style={{ marginBottom: "20px" }} height={50}/>
          <h2 style={{fontWeight: "bold"}}>OTP Code</h2>
          <p style={{color: "grey"}}>Please enter your code.</p>
        </div>

        <Form
          name="verify-otp"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="otp"
            rules={[
              { required: true, message: "Please input your OTP!" },
              { len: 4, message: "OTP must be exactly 4 digits!" },
            ]}
          >
            <Input maxLength={4} style={{ textAlign: "center", fontSize: "24px", padding: 5, fontWeight:"bold",letterSpacing: 15}} />
          </Form.Item>

          <Form.Item>
          <Button 
                type="primary" 
                htmlType="submit"  
                style={{
                    width: "100%",
                    borderRadius: "5px",
                    height: "40px",
                    fontWeight: "bold",
                    backgroundColor: "#006EAD"
                }}
            >
              Verify
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center" }}>
            <span style={{color: "grey"}}>If you don't receive the code? </span>
            <span style={{fontWeight: "bold", fontSize: 16, color: "#006EAD",cursor:"pointer"}} onClick={() => console.log("Resend OTP")}>Resend</span>
        </div>

        <div style={{ textAlign: "center", marginTop: 20 }}>
            <span style={{color: "grey"}}>Back to home page account? </span>
            <Link href="/account/login" style={{fontWeight: "bold", fontSize: 16, color: "#006EAD",cursor:"pointer"}}>Sign in</Link>
        </div>

        <div style={{ position: "absolute", bottom: 20 }}>
          <Text style={{color: "#1D2C60", fontSize: 15}}>
            © 2024 Go For It Hypnotherapy, All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default VerifyOTP;
