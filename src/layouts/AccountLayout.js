import React from "react";
import banner from "../assets/landing_page/section.png"

const AccountLayout = ({ children }) => {
  return (
    <div style={{display: "flex", flexDirection: "row", width: "100%", height: "100vh"}}>
      <div  style={{width: "50%"}}>{children}</div>
      <div 
        style={{
            width: "50%",
            backgroundImage: `url(${banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxSizing: "border-box",
        }}>
      {/* <img src={banner} width={"100%"}/> */}
      </div>
    </div>
  );
};

export default AccountLayout;
