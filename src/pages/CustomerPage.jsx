/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaMagnifyingGlass,
  FaTruck,
  FaUnlockKeyhole,
  FaRegCreditCard,
  FaUserLarge,
  FaStore,
  FaCubesStacked,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa6";
import PhoneIcon from "../assets/PhoneCall.svg";
import ChatIcon from "../assets/ChatCircleDots.svg";
import { topics } from "../data/database";



const CustomerPage = () => {
  return (
    <>
      {/* Introduction section */}
      <section className="py-16">
        <div className="container flex justify-between items-center gap-10">
          {/* Content */}
          <div className="md:w-2/5 flex flex-col gap-4">
            <div>
              {/* who we are tag */}
              <h1 className="bg-yellow-500 px-2 py-4 md:w-fit w-auto md:text-right text-center rounded-sm font-semibold text-sm text-gray-900">
                Help Center
              </h1>
            </div>
            <div>
              <h1 className="text-4xl font-semibold">How we can help you!</h1>
            </div>
            <div className="p-3 border rounded flex items-center justify-between">
              <div className="flex gap-2 items-center w-3/4">
                <FaMagnifyingGlass className="w-6 h-6 text-orange-500" />
                <input
                  type="text"
                  className="text-base font-normal text-gray-500 p-4 w-full capitalize"
                  placeholder="Enter your question or keyword"
                />
              </div>
              <div>
                <button className="p-4 bg-orange-500 rounded text-white text-sm font-bold">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose us section */}
      <section className="py-16">
        <div className="container flex flex-col justify-center items-center gap-10">
          {/* Title */}
          <div>
            <h1 className="text-4xl text-center font-semibold capitalize">
              What can we assist you with today?
            </h1>
          </div>

          {/* Content Feature */}
          <div className="w-full flex flex-wrap justify-around gap-x-2 gap-y-5">
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaTruck className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">Track Order</h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaUnlockKeyhole className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">Reset Password</h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaRegCreditCard className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">Payment Option</h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaUserLarge className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">User & Account</h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaCubesStacked className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">Wishlist & Compare</h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaClipboardList className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">Shipping & Billing</h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaRegCreditCard className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">
                  Shopping Cart & Wallet
                </h3>
              </div>
            </div>
            <div className="md:w-23 w-full p-6 border-2 border-orange-100 hover:border-orange-500 cursor-pointer rounded flex gap-4 items-center">
              {/* Icon */}
              <div>
                <FaStore className="w-8 h-8 text-orange-500" />
              </div>
              <div>
                <h3 className="text-base font-medium">Sell On Csdil</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Topics Section */}
      <section className="py-16">
        <div className="container flex flex-col justify-center items-center gap-10">
          {/* Title */}
          <div>
            <h1 className="text-4xl text-center font-semibold capitalize">
              Popular Topics
            </h1>
          </div>

          {/* Topics list */}
          <div className="w-full flex flex-wrap items-center justify-center gap-x-2 gap-y-5">
            {topics.map((topic) => (
              <div className="md:w-30 w-full flex gap-4 items-center">
                <li className="font-normal text-sm hover:text-orange-500 cursor-pointer">
                  {topic.title}
                </li>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact us section */}
      <section className="py-16">
        <div className="container flex flex-col justify-center items-center gap-10">
          {/* section title */}
          <div className="flex flex-col items-center gap-4">
            <div>
              <h1 className="bg-blue-500 px-4 py-2 md:w-fit w-auto md:text-right text-center rounded-sm font-semibold text-sm text-white">
                Contact Us
              </h1>
            </div>
            <div>
              <h1 className="text-4xl font-semibold text-center">
                Can’t find your answer <br /> Contact us
              </h1>
            </div>
          </div>
          {/* section content container */}
          <div className="w-full flex md:flex-row flex-col justify-center gap-6">
            <div className="md:w-2/5 w-full p-8 flex items-start gap-6 shadow-md rounded-md bg-white">
              <div className="p-6 bg-secondary-500-sub rounded-md">
                <img src={PhoneIcon} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">Call us now</h3>
                  <p className="text-sm font-normal text-gray-600">
                    we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                    Talk with use now
                  </p>
                  <h1 className="text-2xl font-normal">+1-202-555-0126</h1>
                </div>
                <div>
                  <button className="bg-secondary-500 rounded-sm text-white text-sm font-bold uppercase flex items-center gap-2 py-3 px-6">
                    <p>Call Now</p>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-2/5 w-full p-8 flex items-start gap-6 shadow-md rounded-sm bg-white">
              <div className="p-6 bg-success-500-sub rounded-md">
                <img src={ChatIcon} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <h3 className="text-lg font-semibold">Chat with us</h3>
                  <p className="text-sm font-normal text-gray-600">
                    we are available online from 9:00 AM to 5:00 PM (GMT95:45)
                    Talk with use now
                  </p>
                  <h1 className="text-2xl font-normal">Support@csdil.com</h1>
                </div>
                <div>
                  <button className="bg-success-500 rounded-sm text-white text-sm font-bold uppercase flex items-center gap-2 py-3 px-6">
                    <p>Contact Us</p>
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
};

export default CustomerPage;
