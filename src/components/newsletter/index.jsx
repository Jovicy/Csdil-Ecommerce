/* eslint-disable no-unused-vars */
import React from "react";
import macbook from "../../assets/macbook.png";
import sponsor1 from "../../assets/sponsor-1.png";
import sponsor2 from "../../assets/sponsor-2.png";
import sponsor3 from "../../assets/sponsor-3.png";
import sponsor4 from "../../assets/sponsor-4.png";
import sponsor5 from "../../assets/sponsor-5.png";
import { FaArrowRight } from "react-icons/fa";

export default function Newsletter() {
  return (
    <>
      <section className="py-8 bg-sky-700 flex flex-col justify-center items-center">
        <div className="container flex flex-col justify-center items-center gap-4">
          {/* title */}
          <div className="flex flex-col gap-2 text-center md:w-1/2 w-full text-white">
            <h1 className="font-black text-3xl">Subscribe to our newsletter</h1>
            <p className="font-normal text-gray-300 text-base">
              Praesent fringilla erat a lacinia egestas. Donec vehicula tempor
              libero et cursus. Donec non quam urna. Quisque vitae porta ipsum.
            </p>
          </div>
          {/* form */}
          <div className="bg-white md:w-2/5 w-full rounded-md p-2 flex justify-between items-center">
            <input type="text" placeholder="Email Address" className="w-1/2 h-full"/>
            <div>
              <button className="bg-orange-400 rounded-md py-3 px-6 uppercase flex items-center gap-1 text-white font-semibold">
                <p>Subscribe</p>
                <FaArrowRight />
              </button>
            </div>
          </div>
          {/* sponsors */}
          <div className="flex flex-wrap justify-center md:gap-12 gap-5 items-center">
            <div>
              <img src={sponsor1} />
            </div>
            <div>
              <img src={sponsor2} />
            </div>
            <div>
              <img src={sponsor3} />
            </div>
            <div>
              <img src={sponsor4} />
            </div>
            <div>
              <img src={sponsor5} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
