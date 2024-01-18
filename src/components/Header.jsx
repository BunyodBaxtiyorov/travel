import React from "react";
import "./css/main.css";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from "./navbar";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="icons-header">
            <div className="insta-head">
              <FaInstagram />
            </div>
            <div className="tg-head">
              <FaTelegram />
            </div>
            <div className="face-head">
              <FaFacebook />
            </div>
            <div className="you-head">
              <FaYoutube />
            </div>
            <div className="phone-header">+998 88 614 21 07</div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
