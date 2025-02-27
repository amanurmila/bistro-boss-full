import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/home/01.jpg"
import img2 from "../assets/home/02.jpg"
import img3 from "../assets/home/03.png"
import img4 from "../assets/home/04.jpg"
import img5 from "../assets/home/05.png"
import img6 from "../assets/home/06.png"

const Banner = () => {
  return (
    <div>
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={true}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src={img1} alt="Slide 1" />
          </div>
          <div>
            <img src={img2} alt="Slide 2" />
          </div>
          <div>
            <img src={img3} alt="Slide 3" />
          </div>
          <div>
            <img src={img4} alt="Slide 1" />
          </div>
          <div>
            <img src={img5} alt="Slide 2" />
          </div>
          <div>
            <img src={img6} alt="Slide 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
