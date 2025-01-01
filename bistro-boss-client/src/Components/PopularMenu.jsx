import React, { useEffect, useState } from "react";
import HomeTitle from "./HomeTitle";
import MenuItem from "../Pages/Shared/MenuItem";
import useMenu from "../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === "popular" );

  return (
    <div>
      <section>
        <HomeTitle heading={"From Our Menu"} subHeading={"Check It Out"} />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 w-11/12 gap-4 my-5 mx-auto">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default PopularMenu;
