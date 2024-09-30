/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import { FaLocationDot, FaRegClock, FaNairaSign } from "react-icons/fa6";
import { products } from "../../data/database";

const Products = () => {
  return (
    <>
      <section className="bg-white">
        <div className="container py-10 flex flex-col gap-5 justify-center">
          {/* Product title */}
          <div>
            <h1 className="font-semibold text-2xl">Trending Ads</h1>
          </div>
          <div className="flex gap-1 justify-between flex-wrap">
            {products.map((product) => (
              <div className="flex flex-col bg-gray-50 md:w-[24%] w-49 rounded-md mb-3 shadow-md">
                {/* price cart image */}
                <div className="relative">
                  <div className="md:h-72 h-52">
                    <img
                      src={product.image}
                      className="rounded-t-md h-full w-full object-cover"
                    />
                  </div>
                  <div className="bg-orange-200 p-1 border-2 border-orange-400 shadow-md absolute top-0 right-0">
                    <p className="text-orange-400 md:text-base text-xs font-medium">{product.indigene}</p>
                  </div>
                </div>
                {/* price cart description */}
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex md:flex-row flex-col md:items-center gap-1">
                    <h3 className="md:text-lg text-sm flex items-center text-orange-400 font-bold">
                      &#8358; {product.price}
                    </h3><small>{product.ranging}</small>
                  </div>
                  <div>
                    <h1 className="uppercase font-bold md:text-base text-sm">
                      {product.title}
                    </h1>
                    <p className="text-sm">{product.desp}</p>
                  </div>
                  <div className="flex md:flex-row flex-col justify-between md:items-center gap-1">
                    {/* location */}
                    <p className="text-xs flex gap-1 items-center">
                      <FaLocationDot />
                      {product.location}
                    </p>
                    <div>
                      <p className="text-xs flex gap-1 items-center md:bg-gray-100 bg-none p-2 rounded-sm font-semibold">
                        {product.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
