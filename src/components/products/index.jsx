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
            <h1 className="font-semibold text-2xl">Discover more Good Finds</h1>
          </div>
          <div className="flex gap-4 justify-between items-center flex-wrap">
            {products.map((product) => (
              <div className="flex flex-col bg-gray-50 w-22 rounded-md mb-3">
                {/* price cart image */}
                <div>
                  <img src={product.image} className="rounded-t-md h-52 w-full" />
                </div>
                {/* price cart description */}
                <div className="flex flex-col gap-2 p-4">
                  <div>
                    <h1 className="uppercase font-bold text-xl">
                      {product.title}
                    </h1>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-sm">{product.desp}</p>
                    <h3 className="text-base flex items-center text-orange-400 font-semibold">
                      &#8358;{product.price}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-1">
                    {/* location */}
                    <p className="text-sm flex gap-1 items-center">
                      <FaLocationDot />
                      {product.location}
                    </p>
                    <p className="text-sm flex gap-1 items-center">
                      <FaRegClock />
                      {product.postedOn}
                    </p>
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
