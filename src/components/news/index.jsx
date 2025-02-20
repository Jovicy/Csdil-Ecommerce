/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRight, FaRegUserCircle, FaRegCalendar, FaRegComment } from "react-icons/fa";
import Blog1 from "../../assets/blog-1.png";
import Blog2 from "../../assets/blog-2.png";
import Blog3 from "../../assets/blog-3.png";

export default function News() {
  return (
    <>
      <section className="bg-gray-50 ">
        <div className="py-8 container flex flex-col gap-10 justify-center items-center">
          {/* News Title */}
          <div>
            <h1 className="text-3xl font-semibold">Latest News</h1>
          </div>
          {/* News Content Container */}
          <div className="flex md:flex-row md:gap-0 gap-5 flex-col justify-evenly items-center">
            {/* News Card */}
            <div className="bg-white rounded-sm md:w-30 w-full p-4 flex flex-col gap-5">
              {/* Card Image */}
              <div>
                <img src={Blog1} className="w-full" />
              </div>
              {/* Card Content */}
              <div className="flex flex-col gap-5">
                {/* card reactions */}
                <div className="flex items-center gap-5">
                  <span className="flex gap-2 items-center">
                    <FaRegUserCircle className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">Kristin</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaRegCalendar className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">19,Dec,2013</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaRegComment className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">453</p>
                  </span>
                </div>
                {/* card briefing */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    Cras nisl dolor, accumsan et metus sit amet, vulputate
                    condimentum dolor.
                  </h3>
                  <p className="font-normal text-base text-gray-500">
                    Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                    molestie lectus, tincidunt malesuada arcu metus posuere
                    metus.
                  </p>
                </div>
                {/* card button */}
                <div>
                  <button className="bg-transparent rounded-md border-2 border-orange-400 py-3 px-6 uppercase flex items-center gap-2 text-orange-400 font-semibold">
                    <p>Shop Now</p>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            {/* News Card */}
            <div className="bg-white rounded-sm md:w-30 w-full p-4 flex flex-col gap-5">
              {/* Card Image */}
              <div>
                <img src={Blog2} className="w-full"/>
              </div>
              {/* Card Content */}
              <div className="flex flex-col gap-5">
                {/* card reactions */}
                <div className="flex items-center gap-5">
                  <span className="flex gap-2 items-center">
                    <FaRegUserCircle className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">Robert</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaRegCalendar className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">19,Dec,2013</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaRegComment className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">453</p>
                  </span>
                </div>
                {/* card briefing */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    Cras nisl dolor, accumsan et metus sit amet, vulputate
                    condimentum dolor.
                  </h3>
                  <p className="font-normal text-base text-gray-500">
                    Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                    molestie lectus, tincidunt malesuada arcu metus posuere
                    metus.
                  </p>
                </div>
                {/* card button */}
                <div>
                  <button className="bg-transparent rounded-md border-2 border-orange-400 py-3 px-6 uppercase flex items-center gap-2 text-orange-400 font-semibold">
                    <p>Shop Now</p>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            {/* News Card */}
            <div className="bg-white rounded-sm md:w-30 w-full p-4 flex flex-col gap-5">
              {/* Card Image */}
              <div>
                <img src={Blog3} className="w-full"/>
              </div>
              {/* Card Content */}
              <div className="flex flex-col gap-5">
                {/* card reactions */}
                <div className="flex items-center gap-5">
                  <span className="flex gap-2 items-center">
                    <FaRegUserCircle className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">Mubarak</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaRegCalendar className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">19,Dec,2013</p>
                  </span>
                  <span className="flex gap-2 items-center">
                    <FaRegComment className="text-orange-400"/>
                    <p className="text-gray-500 font-normal">453</p>
                  </span>
                </div>
                {/* card briefing */}
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    Cras nisl dolor, accumsan et metus sit amet, vulputate
                    condimentum dolor.
                  </h3>
                  <p className="font-normal text-base text-gray-500">
                    Maecenas scelerisque, arcu quis tempus egestas, ligula diam
                    molestie lectus, tincidunt malesuada arcu metus posuere
                    metus.
                  </p>
                </div>
                {/* card button */}
                <div>
                  <button className="bg-transparent rounded-md border-2 border-orange-400 py-3 px-6 uppercase flex items-center gap-2 text-orange-400 font-semibold">
                    <p>Shop Now</p>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
