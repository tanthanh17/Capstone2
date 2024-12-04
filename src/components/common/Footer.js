import React from 'react';
import '../../css/common/Footer.css';
import logo from "../../assets/logo.png"
import icon_x from "../../assets/icon/icon_x.png"
import icon_youtube from "../../assets/icon/icon_youtube.png"
import icon_fb from "../../assets/icon/icon_fb.png"
import icon_linkined from "../../assets/icon/icon_linkined.png"
import icon_location from "../../assets/icon/icon_location.png"
import icon_phone from "../../assets/icon/icon_phone.png"
import icon_email from "../../assets/icon/icon_email.png"

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="sub-footer-container">
      <div className="footer-left">
        <div className="footer-logo">
          <img src={logo} alt="Go for it Hypnotherapy Logo"/>
        </div>
        <div className="footer-contact">
          <p><img src={icon_location} width={16} style={{marginLeft: 5,marginRight: 20}}/>Moonee Ponds, Victoria, Australia</p>
          <p><img src={icon_email} width={24} style={{marginRight: 15}}/> <a href="mailto:info@goforithypnotherapy.com" style={{textDecoration: "none"}}>info@goforithypnotherapy.com</a></p>
          <p><img src={icon_phone} width={24} style={{marginRight: 15}}/> <a href="tel:+61-91070450" style={{textDecoration: "none"}}>+61 91070450</a></p>
        </div>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Book a Session</a>
        </div>
      </div>
      <div className="footer-right">
        <h4>Get In Touch With Us!</h4>
        <p>Stay up to date with the latest news, announcements, and articles.</p>
        <div className="subscribe-form">
          <input type="email" placeholder="Enter your email" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
      </div>
      <div style={{borderTop: "1px solid grey", marginTop: 10, display: "flex", justifyContent: "space-between"}}>
      <p className="footer-copyright" style={{fontSize: 15}}>© 2024 Go For It Hypnotherapy, All rights reserved.</p>

      <div className="footer-social-icons">
          <a href="#" className="social-icon"><img src={icon_x} width={25}/></a>
          <a href="#" className="social-icon"><img src={icon_linkined} width={25}/></a>
          <a href="#" className="social-icon"><img src={icon_fb} width={25}/></a>
          <a href="#" className="social-icon"><img src={icon_youtube} width={25}/></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
