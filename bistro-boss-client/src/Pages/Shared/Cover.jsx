import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, subTitle }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt={title}
      strength={-200}
    >
      <div
        className="hero min-h-screen"
      >
        <div className="hero-overlay bg-opacity-60 font-playfair bg-[#151515] w-8/12 mx-auto h-56 rounded-md"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5 text-xl">{subTitle}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
