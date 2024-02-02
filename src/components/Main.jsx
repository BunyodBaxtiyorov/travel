import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="Main">
      <div className="container">
        <div className="main-head">
          <h2 data-aos="fade-right">RECOMMENDED TOURS</h2>
          <div className="main-choice" data-aos="fade-up">
            <a href="#">
              <div className="main-1">
                <img
                  src="https://people-travels.com/storage/images/countries/nT6nZmYZH735mCg64x5wZUPZh08SXapN0aQ3yOOo.webp"
                  alt=""
                />
                <h5>Bukhara-Samarkand 3 days tour by train</h5>
              </div>
            </a>
            <a href="#">
              <div className="main-1">
                <img
                  src="https://images.squarespace-cdn.com/content/v1/55ee34aae4b0bf70212ada4c/1548223166673-QY9NQLSURMPNDU7CY6OP/IMG_9677.JPG?format=1500w"
                  alt=""
                />
                <h5>Bukhara-Samarkand 2 days tour by train</h5>
              </div>{" "}
            </a>
            <a href="">
              <div className="main-1">
                <img
                  src="https://www.peregrineadventures.com/blog/wp-content/uploads/2019/02/Intrepid-Travel-Uzbekistan_Samarkand_Shah-i-Zinda_-1820.jpg"
                  alt=""
                />
                <h5>Bukhara-Samarkand 1 days tour by train</h5>
              </div>{" "}
            </a>
            <a href="#">
              <div className="main-1">
                <img
                  src="https://cdn.sanity.io/images/24oxpx4s/prod/3938b055cd3ba11558d72e52e7d843e12f4f1d00-4819x3213.jpg?auto=format&fit=crop&q=70&w=3840&h=5486"
                  alt=""
                />
                <h5>Bukhara-Samarkand 10 days tour by train</h5>
              </div>
            </a>
          </div>
        </div>
        <div className="Next-Main">
          <div className="next-list">
            <h3>Book your unique holiday package</h3>
            <p>
              Travel to Samarkand with one of our special packages. Stay in
              beautiful hotels and visit the sights of our city Come in. Go with
              your family to the famous Registon square, in the fresh air take a
              walk and visit Registan Square in Samarkand.
            </p>
            <button>Explore Deals</button>
          </div>
          <div className="next-list-1">
            <img
              src="https://www.phoenixtravel.se/images/TourTitle/uzbekistan/shah-i-zinda-memorial-complex-necropolis-in-samarkand-uzbekistan.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="Hotel-list">
          <h1>RECOMMENDED HOTELS</h1>
          <div className="main-choice">
            <div className="main-1">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/2e/e2/e1/hilton-tashkent-city.jpg?w=1200&h=-1&s=1"
                alt=""
              />
              <h5>Bukhara-Samarkand 3 days tour by train</h5>
            </div>
            <div className="main-1">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/130518921.jpg?k=e965365a3b46108313c0c0987f1ce1cdac11c2503fe0b1fa166192c8597a319d&o=&hp=1"
                alt=""
              />
              <h5>Bukhara-Samarkand 2 days tour by train</h5>
            </div>{" "}
            <div className="main-1">
              <img
                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/3c/24/ce/ichan-qal-a.jpg?w=1200&h=-1&s=1"
                alt=""
              />
              <h5>Bukhara-Samarkand 1 days tour by train</h5>
            </div>{" "}
            <div className="main-1">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max500/206638601.jpg?k=e51f7b701ba738c76c49a03e3fe3294dd9bc3ef43b2470465e68c030dbe0b52c&o="
                alt=""
              />
              <h5>Bukhara-Samarkand 10 days tour by train</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="Projects">
        <h1 data-aos="fade-right">LOYIHALAR FOTOSURATLARI</h1>
        <div className="main-img-1">
          <div className="img-main-1">
            <img
              src="https://yuz.uz/imageproxy/1200x/https://yuz.uz/file/news/689af743d1301a5e3efe6b800d505e56.jpg"
              alt="main-img-1"
            />
          </div>
          <div className="main-img-1">
            <img
              src="https://storage.kun.uz/source/4/NJ6Nsd_FTixQEXKVHRdSsoInsS8fITaU.jpg"
              alt="main-img-2"
            />
          </div>
          <div className="img-main-1">
            <img
              src="https://www.uzdaily.com/storage/img/2023/05/01af74ecc711660_4.jpg"
              alt="main-img-3"
            />
          </div>
          <div className="img-main-1">
            {" "}
            <img
              src="https://1.bp.blogspot.com/-8zn_MMUfNTI/VE2teqkLujI/AAAAAAAACK0/tecYVsL7Abg/s1600/20141012-_7008441_2.jpg"
              alt="main-img-4"
            />
          </div>
        </div>
        <div className="main-img-2">
          <div className="img-main-1">
            <img
              src="https://www.kiwi.com/stories/wp-content/uploads/2022/06/uzbekistan-covid-travel-restrictions-body-image-1.jpeg"
              alt="img-main-1"
            />
          </div>
          <div className="img-main-1">
            {" "}
            <img
              src="https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/11/Intrepid-Travel-Uzbekistan_Bukhara_-9857.jpg"
              alt="img-main-2"
            />
          </div>
          <div className="img-main-1">
            {" "}
            <img
              src="https://mediaim.expedia.com/destination/1/3c550ec86de830c1679b8c098f16e3e4.jpg"
              alt="img-main-3"
            />
          </div>
          <div className="img-main-1">
            <img
              src="https://www.uzdaily.uz/storage/img/2023/12/112350695_4.jpg"
              alt="img-main-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
