import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Question() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Question">
      <div className="container">
        <h2>BIZGA SAVOLLARINGIZ BORMI?</h2>
        <div className="question">
          <div className="question-1" data-aos="zoom-in-down">
            {" "}
            <form action="/action_page.php">
              <label htmlFor="fname">Ism* *</label> <br />
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ism *"
              />{" "}
              <br />
              <label htmlFor="lname">Telefon Raqami* *</label> <br />
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Telefon Raqami *"
              />{" "}
              <br />
              <label htmlFor="">Sizning xabaringiz* *</label> <br />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Sizning xabaringiz*"
              ></textarea>
            </form>
            <button type="submit">Yuborish</button>
          </div>
          <div className="question-2" data-aos="zoom-out">
            <img
              src="https://centurysilkroadtravel.uz/assets/contact-e-F2SJW_.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
