/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowLeft, FaHouse } from "react-icons/fa6";
import ErrorImg from "../assets/error-img.png"


const ErrorPage = () => {
  return (
    <>
      <section className="py-2 pb-16">
        <div className="container flex flex-col justify-center items-center gap-2">
          {/* Error img Container */}
          <div className="">
            <img src={ErrorImg} />
          </div>
          {/* Error Content */}
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <h1 className="text-4xl	capitalize">404, Page not found</h1>
            <p className="text-gray-700 text-base font-normal">
              Something went wrong. It looks that your request could not be
              found. <br /> It look like the link is broken or the page is
              removed.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 bg-orange-500 text-white rounded-sm text-sm px-4 py-3">
                <FaArrowLeft />
                <p className="uppercase font-semibold">Go Back</p>
              </button>
              <button className="flex items-center gap-2 bg-white border-2 border-orange-100 text-orange-500 rounded-sm text-sm px-4 py-3">
                <FaHouse />
                <p className="uppercase font-semibold">Go Back</p>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
