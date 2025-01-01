import React from "react";
// import backgroundImg from "../../src/assets/home/chef-service.jpg";

const ChefService = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url('../../src/assets/home/chef-service.jpg')`,
      }}
    >
        <div className="flex flex-col items-center justify-center uppercase font-playfair w-9/12 mx-auto bg-base-100 px-40 py-20">
            <h2 className="text-3xl font-semibold">Bistro Boss</h2>
            <p className="text-center my-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione, eveniet temporibus qui vitae eius cumque quos soluta deleniti. Soluta!</p>
        </div>
    </div>
  );
};

export default ChefService;
