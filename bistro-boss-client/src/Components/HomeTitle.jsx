import React from "react";

const HomeTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-3/12 mx-auto text-center my-4">
      <p className="text-yellow-500">--- {subHeading} ---</p>
      <h2 className="text-3xl font-bold uppercase border-y-4 my-2">{heading}</h2>
    </div>
  );
};

export default HomeTitle;
