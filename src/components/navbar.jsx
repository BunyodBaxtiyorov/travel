import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "./img/s1.jpg";
import s2 from "./img/s2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import Button from "./Button.jsx";
import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="Header-all-nav">
          <div className="Header-top">
            <a href="./">
              <div className="header-left">
                <img
                  src="https://centurysilkroadtravel.uz/assets/vizitka-VjlmDffM.jpg"
                  alt="Header-Img"
                />
                <h2>
                  CENTURY SILK <br />
                  ROAD TRAVEL
                </h2>
              </div>
            </a>
          </div>
          <nav>
            <ul>
              <button>{/* <Button /> */}</button>
              <li>
                <a className="link" href="#">
                  BOSH SAHIFA
                </a>
              </li>
              <li>
                <a className="link" href="#">
                  BIZ HAQIMIZDA
                </a>
              </li>{" "}
              <li>
                <a className="link" href="#">
                  HOTELS
                </a>
              </li>{" "}
              <li>
                <a className="link" href="#">
                  GALLERY
                </a>
              </li>{" "}
              <li>
                <a className="link" href="#">
                  YANGILIKLAR
                </a>
              </li>{" "}
              <li>
                <a className="link" href="#">
                  BLOG
                </a>
              </li>{" "}
              <li>
                <a className="link" href="#">
                  ALOQA
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="swiper-1">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={s1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={s2} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Navbar;
