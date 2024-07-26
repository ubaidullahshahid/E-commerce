import React, { useContext } from "react";
import Layout from "../../Components/Layout/Layout";
import HeroSection from "../../Components/HeroSection/HeroSection";
import Category from "../../Components/Category/Category";
import ProductCard from "../../Components/ProductCard/ProductCard";
import Track from "../../Components/Track/Track";
import Testimonial from "../../Components/Testimonial/Testimonial";
import myContext from "../../Context/MyContext";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <ProductCard/>
      <Track/>
      <Testimonial/>
    </Layout>
  );
};

export default HomePage;
