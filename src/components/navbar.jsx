import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import s1 from "./img/s1.jpg";
import s2 from "./img/s2.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper/modules";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="container">
        <div className="Header-all-nav">
          <div className="Header-top">
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
          </div>
          <nav>
            <ul>
              <button>
                <img
                  src="https://centurysilkroadtravel.uz/assets/uzbek-hyvMRtOq.png"
                  alt=""
                />
              </button>
              <li>
                <a href="#">BOSH SAHIFA</a>
              </li>
              <li>
                <a href="#">BIZ HAQIMIZDA</a>
              </li>{" "}
              <li>
                <a href="#">HOTELS</a>
              </li>{" "}
              <li>
                <a href="#">GALLERY</a>
              </li>{" "}
              <li>
                <a href="#">YANGILIKLAR</a>
              </li>{" "}
              <li>
                <a href="#">BLOG</a>
              </li>{" "}
              <li>
                <a href="#">ALOQA</a>
              </li>
            </ul>
          </nav>
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
    </div>
  );
}

export default Navbar;
