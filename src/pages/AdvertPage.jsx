/* eslint-disable no-unused-vars */
import React from "react";

const AdvertPage = () => {
  return (
    <>
      <section className="py-14">
        <div className="container flex flex-col gap-5">
          {/* Post Ad Title */}
          <div className="bg-white border rounded-sm shadow p-4 flex justify-center text-center gap-5">
            <div className="flex justify-between items-center md:w-1/2 w-full">
              <div>
                <h1 className="font-medium text-lg">Post Ad</h1>
              </div>
              <div>
                <p className="text-orange-400 bg-orange-100 py-2 px-4 cursor-pointer rounded-sm font-medium">
                  Clear
                </p>
              </div>
            </div>
          </div>
          {/* Post Ad Fields */}
          <div className="bg-white border rounded-sm shadow p-5 flex flex-col justify-center items-center gap-5">
            <div className="w-3/4 flex justify-center items-center">
              <div className="md:w-1/2 w-full flex flex-col gap-5">
                {/* Input Fields */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-medium text-base">
                    Select Category
                  </label>
                  <select
                    id="categorySelect"
                    name="categories"
                    className="border w-full py-2.5 px-5 rounded-sm"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home-appliances">Home Appliances</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-medium text-base">
                    Select Sub Category
                  </label>
                  <select
                    id="categorySelect"
                    name="categories"
                    className="border w-full py-2.5 px-5 rounded-sm"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home-appliances">Home Appliances</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-medium text-base">
                    Select Location
                  </label>
                  <select
                    id="categorySelect"
                    name="categories"
                    className="border w-full py-2.5 px-5 rounded-sm"
                  >
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="books">Books</option>
                    <option value="home-appliances">Home Appliances</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-medium text-base">
                    Add Photo
                  </label>
                  <h4></h4>
                  <p></p>
                  <small>Supported formats are *.jpg and *.png</small>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="category" className="font-medium text-base">
                    Link To Youtube Video
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="border w-full py-2.5 px-5 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvertPage;
