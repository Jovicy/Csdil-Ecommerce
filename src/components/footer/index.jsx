/* eslint-disable no-unused-vars */
import React from "react";
import footerImg from "../../assets/footer-nigeria-new.svg";
import { FaFacebookF, FaInstagram, FaTiktok, FaSquareXTwitter, FaYoutube, FaPinterestP } from "react-icons/fa6";


const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center pt-4 bg-white text-white">
        <div>
          <img src={footerImg} alt="footer-img" />
        </div>
        <div className="py-8 bg-orange-400 w-full">
          <div className="container flex flex-col gap-4">
            {/* Footer Links */}
            <div className="py-4 flex md:flex-row flex-col md:justify-between md:gap-0 gap-10">
              <div className="flex md:flex-row flex-col justify-between gap-10 md:w-2/4 w-full">
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-lg">About Us</h3>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#">About Csdil</a>
                    </li>
                    <li>
                      <a href="#">Advertise With Us</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Media</a>
                    </li>
                    <li>
                      <a href="#">Press</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-lg">Help & Contact</h3>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Safety</a>
                    </li>
                    <li>
                      <a href="#">Policies</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Insurance</a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="font-bold text-lg">More From Us</h3>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#">Car Guides</a>
                    </li>
                    <li>
                      <a href="#">Csdil Life</a>
                    </li>
                    <li>
                      <a href="#">Car Reviews</a>
                    </li>
                    <li>
                      <a href="#">Sell My Car</a>
                    </li>
                    <li>
                      <a href="#">Upcycle Revolution</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-2/4 w-full flex md:justify-end">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-lg">Mobile Apps</h3>
                  <ul>
                    <li>
                      <a href="#">More About Our Apps</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer Socials */}
            <div className="flex justify-center border-2 border-orange-200 border-x-transparent py-4">
              <div className="flex flex-col items-center gap-5">
                <h3 className="text-2xl font-bold">Join Csdil Community</h3>
                <div className="flex flex-wrap md:gap-10 gap-5">
                  <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700 bg-orange-200">
                    <FaFacebookF />
                  </div>
                  <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700 bg-orange-200">
                    <FaInstagram />
                  </div>
                  <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700 bg-orange-200">
                    <FaTiktok />
                  </div>
                  <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700 bg-orange-200">
                    <FaSquareXTwitter />
                  </div>
                  <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700 bg-orange-200">
                    <FaYoutube />
                  </div>
                  <div className="rounded-full h-10 w-10 flex justify-center items-center text-orange-700 bg-orange-200">
                    <FaPinterestP />
                  </div>
                </div>
              </div>
            </div>
            {/* copyright */}
            <div className="text-center">
              <p className="text-base">
                © Copyright 2024 Csdil.com Limited. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
