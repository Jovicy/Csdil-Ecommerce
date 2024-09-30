/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ForgetForm = () => {
  return (
    <>
      <div className="container py-14 flex flex-col gap-5 justify-center items-center">
        <form className="bg-white border rounded-sm shadow md:w-2/5 w-full p-4 flex flex-col gap-5">
          {/* Form main content */}
          <div className="flex flex-col gap-4">
            {/* form title */}
            <div className="text-center flex flex-col gap-2">
              <h1 className="font-semibold text-2xl">Forget Password</h1>
              <p className="font-normal text-gray-500">
                Enter the email address or mobile phone number associated with
                your Csdil account.
              </p>
            </div>
            {/* form inputs */}
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <div className="flex justify-between">
                  <label htmlFor="email" className="font-medium text-base">
                    Email Address
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="email"
                    className="border w-full py-2.5 px-5 rounded-sm"
                  />
                </div>
              </div>
              {/* form button */}
              <div>
                <button
                  type="submit"
                  className="uppercase flex items-center justify-center gap-1 w-full bg-orange-400 text-white rounded-sm py-2.5 px-5 font-medium text-base"
                >
                  Send code
                  <FaArrowRight />
                </button>
              </div>
            </div>
            {/* form options */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <p className="text-gray-500">Already have an account?</p>
                <Link to="/signin" className="text-blue-500">Sign In</Link>
              </div>
              <div className="flex items-center gap-2">
                <p className="text-gray-500">Create an account?</p>
                <Link to="/signup" className="text-blue-500">Sign Up</Link>
              </div>
            </div>
          </div>
          {/* Form extra content */}
          <div className="border border-transparent border-t-gray-100 py-5">
            <p>
              You may contact{" "}
              <span className="text-orange-400">Customer Service</span> for help
              restoring access to your account.
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetForm;
