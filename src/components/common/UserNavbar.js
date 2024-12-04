import React from "react";
import { Menu, Button, Dropdown } from "antd";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import { CalendarOutlined, LogoutOutlined } from "@ant-design/icons";
import { message } from "antd";
import api from "../../utils/api";

const UserNavbar = () => {
  const [isAuth, setIsAuth] = React.useState(false)
  const [abbreviation, setAbbreviation] = React.useState("AB")

  React.useEffect(()=>{
    checkAuthentication()
  },[])
  
  const checkAuthentication = async()=> {
    const accessToken = localStorage.getItem("access_token")
    if (accessToken){
      const response = await api.get("/user/me/")
      if (response?.status == 200){
        setIsAuth(true)
        const fullName = response.data?.full_name
        const nameParts = fullName.split(" ");

        // Extract the first letter of each word and join them together
        const abbreviation = nameParts.map(name => name.charAt(0).toUpperCase()).join('');
        setAbbreviation(abbreviation)

      }else{
        setIsAuth(false)
      }
    }else{
      setIsAuth(false)
    }
  }

  const handleMenuClick = (e) => {
    // Handle logout
    if(e.key == "1"){
      localStorage.removeItem("access_token")
      localStorage.removeItem("refresh_token")
      setIsAuth(false)
      message.success("Logout Successfully!", 2)
    }
  };

  
  const items = [
    {
      label: 'Logout',
      key: '1',
      icon: <LogoutOutlined />,
    },
  ];

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };


  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        width: "100%",
        minHeight: 80
      }}
    >
      {/* Logo */}
      <div style={{ fontSize: "20px", fontWeight: "bold" }}>
        <Link to="/">
          <img
            src={logo}
            alt="Go For It Hypnotherapy"
            style={{ height: "40px" }}
          />
        </Link>
      </div>

      {/* Menu Items */}
      <Menu
        mode="horizontal"
        style={{
            width: "50%",
            border: "none",
            fontSize: "16px",
            fontWeight: "500",
            display: "flex",
            justifyContent: "center",
          }}
        >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="pricing">
          <Link to="/pricing">Pricing</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="/contact">Contact Us</Link>
        </Menu.Item>
      </Menu>

      {/* Buttons */}
      <div style={{display: 'flex', justifyContent: "center", alignItems: "center"}}>
        {isAuth == false ?
        <>
        <Button type="link" style={{ marginRight: "10px", color:"rgba(90, 90, 90, 1)", fontWeight: "bold" }}>
          <Link to="/account/login" style={{ color: "inherit" }}>
            Log in
          </Link>
        </Button>
        <Button type="default" style={{ backgroundColor: "#46B56F", marginRight: "10px",color: "#fff", fontWeight:"bold", borderRadius:20, padding:20 }}>
          <Link to="/account/signup" style={{ color: "inherit" }}>
            Sign Up
          </Link>
        </Button>
        </>
        :
        <>
        <Dropdown menu={menuProps}>
        <div 
          type="link" 
          style={{ 
            width: 40,
            height: 40,
            backgroundColor: 'grey',
            borderRadius: "100%",
            marginRight: 20,
            backgroundColor: "rgba(210, 210, 210, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "rgba(90, 90, 90, 1)",
            cursor: "pointer",
            fontSize: abbreviation.length > 2 ? 14 : 18
          }}  
        >
          {abbreviation}
        </div>
        </Dropdown>
        </>
        }
        <Button type="default" style={{backgroundColor:"#38B0CD",color: "#fff", fontWeight:"bold", borderRadius:20, padding:20 }}>
          <Link to="/booking" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
            <CalendarOutlined style={{ fontSize: "18px", marginRight: "10px" }}/>
            Book a Session
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default UserNavbar;
