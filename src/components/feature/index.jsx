/* eslint-disable no-unused-vars */
import React from "react";
import packages from "../../assets/package.png";
import trophy from "../../assets/trophy.png";
import card from "../../assets/creditcard.png";
import headphones from "../../assets/headphones.png";

export default function Feature() {
  return (
    <>
      <section>
        {/* Feature List */}
        <div className="container border border-gray-50 p-5 rounded-md flex md:flex-nowrap flex-wrap gap-y-5 justify-between">
          <div className="flex gap-5 items-center px-4 md:w-auto w-1/2">
            <img src={packages} className="md:h-auto h-5 md:w-auto w-5"/>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold">Fasted Delivery</h3>
              <p className="text-xs">Delivery in 24/H</p>
            </div>
          </div>
          <div className="flex gap-5 items-center border-l-2 border-gray-50 px-4 md:w-auto w-1/2">
            <img src={trophy} className="md:h-auto h-5 md:w-auto w-5"/>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold">24 Hours Return</h3>
              <p className="text-xs">100% money-back guarantee</p>                                                                          
            </div>
          </div>
          <div className="flex gap-5 items-center border-l-2 border-gray-50 px-4 md:w-auto w-1/2">
            <img src={card} className="md:h-auto h-5 md:w-auto w-5"/>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold">Secure Payment</h3>
              <p className="text-xs">Your money is safe</p>
            </div>
          </div>
          <div className="flex gap-5 items-center border-l-2 border-gray-50 px-4 md:w-auto w-1/2">
            <img src={headphones} className="md:h-auto h-5 md:w-auto w-5"/>
            <div className="flex flex-col gap-1">
              <h3 className="md:text-base text-sm font-semibold">Support 24/7</h3>
              <p className="text-xs">Live contact/message</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
