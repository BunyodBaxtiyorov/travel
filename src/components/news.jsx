import React from "react";

function News() {
  return (
    <div className="News">
      <div className="container">
        <h1>YANGILIKLAR</h1>
        <div className="news-list">
          <div className="new-list">
            <img
              src="https://api.qadrdon.uz/api/uploads/images/47ddfe7a-2c07-4e58-a9de-0bc7df0a6410.jpeg"
              alt=""
            />
            <div className="new-text">
              <h3>ALSTAR 7 PRO</h3>
              <p>
                Do'stlar, bugun bizning birinchi va o'z sohasida yagona ALSTAR 7
                PRO onlayn jurnalimiz nashr etildi!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
          <div className="new-list">
            <img
              src="https://api.qadrdon.uz/api/uploads/images/13299b46-a748-4c8a-a3e2-5c3b5d0e5347.png"
              alt=""
            />
            <div className="new-text">
              <h3>ALSTAR 7 PRO</h3>
              <p>
                Do'stlar, bugun bizning birinchi va o'z sohasida yagona ALSTAR 7
                PRO onlayn jurnalimiz nashr etildi!
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
