import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import menuImg1 from "../assets/menu/banner3.jpg";
import dessertImg from "../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../assets/menu/pizza-bg.jpg";
import saladImg from "../assets/menu/salad-bg.jpg";
import soupImg from "../assets/menu/soup-bg.jpg";
import useMenu from "../Hooks/useMenu";
import HomeTitle from "../Components/HomeTitle";
import MenuCategory from "./Shared/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="w-11/12 mx-auto">
      <Helmet>
        <title>Menu || Bistro Boss</title>
      </Helmet>
      <section>
        <Cover
          img={menuImg1}
          title={"Our Menu"}
          subTitle={"Would you like to try a Dish"}
        />
        <HomeTitle heading={"Today's Offer"} subHeading={"Don't Miss"} />
        <MenuCategory items={offered} />
      </section>
      <section>
        <MenuCategory
          items={desserts}
          title="dessert"
          subTitle={"Try this dish. It is enough good"}
          img={dessertImg}
        />
      </section>
      <section>
        <MenuCategory
          items={pizza}
          title="pizza"
          subTitle={"You can try this dish. It's very Delicious"}
          img={pizzaImg}
        />
      </section>
      <section>
        <MenuCategory
          items={salad}
          title="salad"
          subTitle={"You can try this dish. It's very Delicious"}
          img={saladImg}
        />
      </section>
      <section>
        <MenuCategory
          items={soup}
          title="soup"
          subTitle={"You can try this dish. It's very Delicious"}
          img={soupImg}
        />
      </section>
    </div>
  );
};

export default Menu;
