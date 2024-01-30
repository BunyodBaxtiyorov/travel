import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="all-footer">
          <div className="company">
            <h1>KOMPANYAMIZ HAQIDA</h1>
            <h1>CENTURY SILK ROAD TRAVEL</h1>
            <p>
              We warmly welcome you in Uzbekistan and Central Asia, the heart of
              the Great Silk Road!
            </p>
            <div className="global-link">
              <a href="#">
                {" "}
                <FaInstagram />
              </a>
              <a href="#">
                {" "}
                <FaTelegram />
              </a>
              <a href="#">
                {" "}
                <FaFacebook />
              </a>
              <a href="#">
                {" "}
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="fast-links">
            <h1>Tezkor havolalar</h1>
            <ul>
              <li>
                <a href="#">BIZ HAQIMIZDA</a>
              </li>
              <li>
                <a href="#">MAHSULOTLAR</a>
              </li>
              <li>
                <a href="#">YANGILIKLAR</a>
              </li>
              <li>
                <a href="#">LOYIHALAR</a>
              </li>
              <li>
                <a href="#">ALOQA</a>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h1>ALOQA</h1>
            <ul>
              <li>
                {" "}
                <a href="#">
                  55 Aviasozlar Street,100171 Tashkent, Uzbekistan.
                </a>
              </li>
              <li>
                <a href="#">info@millenniumsilkroadtravel.uz</a>
              </li>
              <li>
                {" "}
                <a href="#">+998 97 747 28 06</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
