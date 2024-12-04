import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import logo from "../../assets/logo.png"
import api from "../../utils/api"
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const { Title, Text, Link } = Typography;

const Login = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [rememberMe, setRememberMe] = React.useState(false);

  // Check localStorage for saved login credentials on initial render
  React.useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");

    if (savedEmail && savedPassword) {
      form.setFieldsValue({
        email: savedEmail,
        password: savedPassword,
        remember: true,
      });
      setRememberMe(true);
    }
  }, [form]);

  const onFinish = async (values) => {
    const response = await login(values)
    setRememberMe(values.remember)
    if(values.remember){
      localStorage.setItem("email", values.email)
      localStorage.setItem("password", values.password)
    }else{
      localStorage.removeItem("email", values.email)
      localStorage.removeItem("password", values.password)
    }
  
    if (response.status != 200){
      form.setFields([
        {
          name: 'email',
          errors: [response.error?.detail || 'Login failed'],
        },
      ]);
    }else{
      const data = response.data
      localStorage.setItem("access_token", data.access)
      localStorage.setItem("refresh_token", data.refresh)
      form.resetFields();
      navigate("/");
      message.success("Login Successfully!", 2)
    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const login = async (data) => {
    try {
      const response = await api.post('/login/', data);
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          padding: "40px",
          textAlign: "center",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
            <Link href="/">
            <img
                src={logo} // Thay bằng logo của bạn
                alt="Logo"
                style={{ marginBottom: "10px" }}
                height={50}
            />
            </Link>
          <Title level={3} style={{ marginBottom: "5px" }}>
            Welcome back 👋
          </Title>
          <Text>Please enter your login credentials.</Text>
        </div>
        <Form
          name="login"
          form={form}
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ textAlign: "left" }}
        >
          <p style={{marginBottom: 5}}> Email </p>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Email is required!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input style={{padding: 10}} placeholder="Enter your email" />
          </Form.Item>
          
          <p style={{marginBottom: 5}}> Password </p>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Password is required!" }]}
          >
            <Input.Password  style={{padding: 10}} placeholder="Enter your password" />
          </Form.Item>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 24
            }}
          >
          <Form.Item name="remember" valuePropName="checked" style={{margin: 0}}>
            <Checkbox >Remember me</Checkbox>
          </Form.Item>
          <Link href="/account/reset-password" style={{ color: "#12B76A", fontWeight: "bold" }}>
              Forgot password?
          </Link>
        </div>

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
              Sign in
            </Button>
          </Form.Item>
        </Form>
        <Text>
          Don’t have an account? <Link href="/account/signup"  style={{fontWeight: "bold", fontSize: 16, color: "#006EAD"}}>Sign up</Link>
        </Text>
        <div style={{ position: "absolute", bottom: 20 }}>
          <Text style={{color: "#1D2C60", fontSize: 15}}>
            © 2024 Go For It Hypnotherapy, All rights reserved.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Login;
