import React from "react";
import MenuItem from "./MenuItem";
import Cover from "./Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ items, title, img, subTitle }) => {
  return (
    <div className="my-5">
      <section className="my-6">
        {title && (
          <Cover
            img={img}
            title={title}
            subTitle={subTitle}
          />
        )}
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 w-11/12 gap-4 my-10 mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </section>
     <section className="text-center">
     <Link to={`/order/${title}`} className="btn bg-gray-400 border-b-8 border-gray-700">Order Now</Link>
     </section>
    </div>
  );
};

export default MenuCategory;
