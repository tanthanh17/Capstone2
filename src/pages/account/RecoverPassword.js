import React from "react";
import { Form, Input, Button, Typography } from "antd";
import logo from "../../assets/logo.png"

const {Text, Link } = Typography;

const RecoverPassword = () => {
  const onFinish = (values) => {
    console.log("Email Submitted:", values.email);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "400px", background: "#fff", padding: "20px", borderRadius: "8px"}}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <Link href="/"><img src={logo} alt="Logo" height={50} style={{ marginBottom: "10px" }} /></Link>
          <h2 style={{fontWeight: "bold", marginTop: 20}}>Recover Password</h2>
          <p style={{color: "grey"}}>Please enter your email.</p>
        </div>

        <Form
          name="recover-password"
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid email!" },
            ]}
          >
            <Input style={{padding: 10}} placeholder="Enter your email" />
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
              Send Code
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center" }}>
          <span>Back to home page account? </span>
          <Link href="/account/login"  style={{fontWeight: "bold", fontSize: 16, color: "#006EAD"}}>Sign in</Link>
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

export default RecoverPassword;
