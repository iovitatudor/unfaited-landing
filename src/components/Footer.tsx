import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Logo from "../images/Logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-area">
      <Container maxWidth={'xl'}>
        <div className="footer-logo">
          <img src={Logo} alt=""/>
        </div>
        <div className="footer-menu">
          <div className="footer-menu-left">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Storyline</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-menu-right">
            <ul>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            © UNFATED {currentYear}
          </div>
          <div className="footer-bottom-right">
            <a href="#">
              <img src="/images/twitch 1.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/youtube.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/discord 1.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/square-x-twitter.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/facebook.png" alt=""/>
            </a>
            <a href="#">
              <img src="/images/instagram.png" alt=""/>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;