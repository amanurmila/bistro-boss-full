import React from "react";
import featured from "../assets/home/featured.jpg";
import HomeTitle from "./HomeTitle";

const FromMenu = () => {
  return (
    <div
      className="bg-cover bg-center h-screen backdrop-blur-sm bg-fixed"
      style={{ backgroundImage: `url(${featured})` }}
    >
      <section className="py-12 text-black">
        <HomeTitle heading={"From Our Menu"} subHeading={"Check it Out"} />
      </section>
      <section className="flex justify-center items-center bg-slate-500 bg-opacity-55 p-10 w-7/12 mx-auto gap-6">
        <img src={featured} className="w-72 rounded-md" alt="" />
        <div className="text-white">
            <h3>Where Can I Get Some</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam doloremque ea officia ullam earum, alias modi temporibus sapiente aspernatur eius voluptas magni, numquam nam rem quod perferendis. Accusantium doloremque et molestiae dolorum, porro, ducimus ut quos id voluptatibus quia ad?</p>
            <button className="btn bg-gray-400 border-b-8 border-gray-700">Read More</button>
        </div>
      </section>
    </div>
  );
};

export default FromMenu;
