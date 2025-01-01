import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slider1 from "../assets/home/slide1.jpg";
import slider2 from "../assets/home/slide2.jpg";
import slider3 from "../assets/home/slide3.jpg";
import slider4 from "../assets/home/slide4.jpg";
import slider5 from "../assets/home/slide5.jpg";
import HomeTitle from "./HomeTitle";

const Category = () => {
  return (
    <div>
      <HomeTitle heading={"Order Online"} subHeading={"From 11am to 10pm"} />
      <div className="category-container">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider1} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider2} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider3} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider4} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-content">
              <img src={slider5} alt="" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Category;
