/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import GoogleIcon from "../../assets/Google.png";
import OrLine from "../../assets/or-line.png";
import AppleIcon from "../../assets/apple-icon.png";
import { Link } from "react-router-dom";

const SignupForm = () => {
  const [isSignUp, setIsSignUp] = useState(false); // State to track active tab

  const [agreeToTerms, setAgreeToTerms] = useState(false); // State to track checkbox

  const handleCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  return (
    <>
      <div className="container py-14 flex flex-col gap-5 justify-center items-center">
        <form className="bg-white border rounded-sm shadow md:w-2/5 w-full">
          {/* Form Title */}
          <div className="flex items-center justify-between w-full border border-transparent border-b-gray-100">
            <div
              className={`w-1/2 p-5 flex justify-center font-bold text-lg cursor-pointer ${
                !isSignUp
                  ? "text-gray-500 border-b-4 border-orange-400"
                  : "text-gray-500"
              }`}
              onClick={() => setIsSignUp(false)}
            >
              Sign In
            </div>
            <div
              className={`w-1/2 p-5 flex justify-center font-bold text-lg cursor-pointer ${
                isSignUp
                  ? "text-gray-500 border-b-4 border-orange-400"
                  : "text-gray-500"
              }`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </div>
          </div>

          {/* Form Content */}
          <div className="p-5 flex flex-col gap-3">
            {!isSignUp ? (
              // Sign In Content
              <div className="flex flex-col gap-6">
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
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="font-medium text-base">
                      Password
                    </label>
                    <Link
                      htmlFor="email"
                      to="forget-password"
                      className="font-medium text-base text-blue-500"
                    >
                      Forget Password
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
                    Sign In
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            ) : (
              // Sign Up Content
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <label htmlFor="username" className="font-medium text-base">
                      Username
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      id="username"
                      className="border w-full py-2.5 px-5 rounded-sm"
                    />
                  </div>
                </div>
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
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="font-medium text-base">
                      Password
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      className="border w-full py-2.5 px-5 rounded-sm"
                      placeholder="8+ Characters"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between">
                    <label htmlFor="password" className="font-medium text-base">
                      Confirm Password
                    </label>
                  </div>
                  <div>
                    <input
                      type="password"
                      id="password"
                      className="border w-full py-2.5 px-5 rounded-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreeToTerms}
                    onChange={handleCheckboxChange}
                    className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-400 focus:ring-2"
                  />
                  <label htmlFor="agree" className="text-sm">
                    I agree to the <a href="#" className="text-orange-500 underline">Terms and Conditions</a>
                  </label>
                </div>
 
                {/* Form button */}
                <div>
                  <button
                    type="submit"
                    className="uppercase flex items-center justify-center gap-1 w-full bg-orange-400 text-white rounded-sm py-2.5 px-5 font-medium text-base"
                  >
                    Sign Up
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            )}

            {/* Form Authenticators */}
            <div className="flex flex-col gap-6">
              <div className="w-full flex justify-center">
                <img src={OrLine} alt="or-line" />
              </div>
              <div>
                <button className="bg-transparent border rounded-sm w-full flex items-center py-3 px-5">
                  <div className="w-1/3">
                    <img src={GoogleIcon} alt="Google icon" />
                  </div>
                  <div className="w-2/3">
                    <p className="text-left">
                      {isSignUp ? "Sign Up with Google" : "Login with Google"}
                    </p>
                  </div>
                </button>
              </div>
              <div>
                <button className="bg-transparent border rounded-sm w-full flex items-center py-3 px-5">
                  <div className="w-1/3">
                    <img src={AppleIcon} alt="Apple icon" />
                  </div>
                  <div className="w-2/3">
                    <p className="text-left">
                      {isSignUp ? "Sign Up with Apple" : "Login with Apple"}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupForm;
