/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";


const VerifyForm = () => {
  return (
    <>
      <div className="container py-14 flex flex-col gap-5 justify-center items-center">
        <form className="bg-white border rounded-sm shadow md:w-2/5 w-full p-4 flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            {/* form title */}
            <div className="text-center flex flex-col gap-2">
              <h1 className="font-semibold text-2xl">
                Verify Your Email Address
              </h1>
              <p className="font-normal text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti nihil blanditiis repellat.
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex justify-between">
                <label htmlFor="password" className="font-medium text-base">
                  Verification Code
                </label>
                <Link
                  htmlFor="email"
                  to="forget-password"
                  className="font-medium text-base text-blue-500"
                >
                  Resend Code
                </Link>
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="border w-full py-2.5 px-5 rounded-sm"
                />
              </div>
            </div>
            {/* Form button */}
            <div>
              <button
                type="submit"
                className="uppercase flex items-center justify-center gap-1 w-full bg-orange-400 text-white rounded-sm py-2.5 px-5 font-medium text-base"
              >
                Verify Me
                <FaArrowRight />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default VerifyForm;
