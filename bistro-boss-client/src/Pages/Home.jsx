import React from "react";
import Banner from "../Components/Banner";
import Category from "../Components/Category";
import HomeTitle from "../Components/HomeTitle";
import ChefService from "../Components/ChefService";
import PopularMenu from "../Components/PopularMenu";
import ContactUs from "../Components/ContactUs";
import ChefRecommends from "../Components/ChefRecommends";
import FromMenu from "../Components/FromMenu";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home || Bistro Boss</title>
      </Helmet>
      <section className="w-11/12 mx-auto">
        <Banner />
      </section>
      <section className="w-11/12 mx-auto my-7">
        <Category />
      </section>
      <section className="w-11/12 mx-auto my-6">
        <ChefService />
      </section>
      <section>
        <PopularMenu />
      </section>
      <section>
        <ContactUs />
      </section>
      <section className="w-11/12 mx-auto">
        <ChefRecommends />
      </section>
      <section className="my-10">
        <FromMenu />
      </section>
      <section className="w-10/12 mx-auto">
        <Testimonials />
      </section>
    </div>
  );
};

export default Home;
