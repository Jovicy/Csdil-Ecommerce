// eslint-disable-next-line no-unused-vars
import React from 'react';
import Advert from "../components/advert/index";
import Feature from "../components/feature/index";
import SubCategory from "../components/subCategory/index";
import Category from "../components/category/index";
import Products from "../components/products/index";
import News from "../components/news/index";
import Newsletter from "../components/newsletter/index";

const HomePage = () => {
  return (
    <>
      <Advert />
      <SubCategory />
      <Feature />
      {/* Best Deal */}
      <Category />
      <Products />
      {/* Categories */}
      <News />
      <Newsletter />
    </>
  );
}

export default HomePage