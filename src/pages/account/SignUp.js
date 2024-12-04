import React from "react";
import { Form, Input, Button, Typography } from "antd";
import logo from "../../assets/logo.png"
import api from "../../utils/api"
import { useNavigate } from "react-router-dom";

const { Text, Link } = Typography;

const Signup = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const response = await signup(values);
    if (response.status == 201){
      form.resetFields();
      navigate("/account/login");
    }else{
      form.setFields([
        {
          name: 'email',
          errors: [response.error?.email || 'Login failed'],
        },
      ]);
      
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const signup = async (data) => {
    try {
      const response = await api.post('/signup/', data);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      return {
        error: error.response?.data || 'An error occurred',
        status: error.response?.status,
      };
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div style={{ width: "400px", background: "#fff", padding: "20px", borderRadius: "8px"}}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <Link href="/"><img src={logo} alt="Logo" style={{ marginBottom: "20px" }} height={50}/></Link>
            <h2>Let’s Start 👋</h2>
            <p>Please add your credentials to the fields below.</p>
        </div>

        <Form
          name="signup"
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Full Name"
            name="full_name"
            rules={[{ required: true, message: "Full Name is required!" }]}
          >
            <Input  style={{padding: 10}} placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "The input is not valid email!" },
            ]}
          >
            <Input  style={{padding: 10}} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: "Password is required!" },
              { min: 6, message: "Password must be at least 6 characters!" },
            ]}
          >
            <Input.Password  style={{padding: 10}} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            dependencies={["password"]}
            rules={[
              { required: true, message: "Confirm password is required!" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error("Passwords do not match!"));
                },
              }),
            ]}
          >
            <Input.Password  style={{padding: 10}} placeholder="Confirm your password" />
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
              Sign up
            </Button>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center" }}>
          <span>Already have an account? </span>
          <Link href="/account/login" style={{fontWeight: "bold", fontSize: 16, color: "#006EAD"}}>Sign in</Link>
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

export default Signup;
