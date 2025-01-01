import React from "react";
import HomeTitle from "./HomeTitle";
import { FaArrowRight } from "react-icons/fa";
import featuredImg from "../assets/home/featured.jpg";

const ChefRecommends = () => {
  return (
    <div>
      <section>
        <HomeTitle heading={"Chef Recommends"} subHeading={"Should Try"} />
      </section>
      <section className="flex">
        <div className="max-w-sm mx-auto bg-base-100 shadow-xl rounded-lg overflow-hidden">
          {/* Card Image */}
          <div className="relative">
            <img
              src={featuredImg}
              alt="Card Top"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4 text-center">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>

            {/* Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              repellat.
            </p>

            {/* Fancy Button */}
            <button className="btn bg-gray-200 text-xl border-b-8 text-yellow-600 border-yellow-600 w-full flex items-center justify-center gap-2">
              Add to Cart <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-base-100 shadow-xl rounded-lg overflow-hidden">
          {/* Card Image */}
          <div className="relative">
            <img
              src={featuredImg}
              alt="Card Top"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4 text-center">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>

            {/* Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              repellat.
            </p>

            {/* Fancy Button */}
            <button className="btn btn-neutral text-yellow-600 text-xl w-full flex items-center justify-center gap-2">
              Add to Cart <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="max-w-sm mx-auto bg-base-100 shadow-xl rounded-lg overflow-hidden">
          {/* Card Image */}
          <div className="relative">
            <img
              src={featuredImg}
              alt="Card Top"
              className="w-full h-48 object-cover"
            />
          </div>

          {/* Card Body */}
          <div className="p-6 space-y-4 text-center">
            {/* Title */}
            <h2 className="text-xl font-bold text-gray-800">Card Title</h2>

            {/* Description */}
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              repellat.
            </p>

            {/* Fancy Button */}
            <button className="btn bg-gray-200 text-xl border-b-8 text-yellow-600 border-yellow-600 w-full flex items-center justify-center gap-2">
              Add to Cart <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefRecommends;
