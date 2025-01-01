import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt="Shoes"
        />
      </figure>
      <p className="bg-slate-900 text-white w-fit py-1 px-2 rounded-md absolute right-2 top-2">${price}</p>
      <div className="card-body flex flex-col items-center justify-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-gray-400 border-b-8 border-gray-700">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
