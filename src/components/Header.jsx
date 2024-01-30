import React from "react";
import "./css/main.css";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="container">
          <div className="icons-header">
            <a href="https://instagram.com">
              <div className="insta-head">
                <FaInstagram />
              </div>
            </a>
            <a href="https://t.me/BaxtiyorovBunyod">
              <div className="tg-head">
                <FaTelegram />
              </div>
            </a>
            <a href="https://facebook.com">
              <div className="face-head">
                <FaFacebook />
              </div>
            </a>
            <a href="https://youtube.com">
              <div className="you-head">
                <FaYoutube />
              </div>
            </a>
            <a href="#">
              {" "}
              <div className="phone-header">+998 88 614 21 07</div>
            </a>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Header;
