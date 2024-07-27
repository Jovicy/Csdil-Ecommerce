/* eslint-disable no-unused-vars */
import { useState } from "react";
import Navbar from "../src/components/navbar/index"
import Advert from "../src/components/advert/index"
import Feature from "../src/components/feature/index"
import SubCategory from "../src/components/subCategory/index"
import Category from "../src/components/category/index"
import Products from "../src/components/products/index"
import News from "../src/components/news/index"
import Newsletter from "../src/components/newsletter/index"
import Footer from "../src/components/footer"

function App() {
  return (
    <>
      <Navbar/>
      <Advert/>
      <SubCategory/>
      <Feature/>
      {/* Best Deal */}
      <Category/>
      <Products/>
      {/* Categories */}
      <News/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default App;
