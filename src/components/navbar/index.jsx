/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { subSections } from "../../data/database"; // assuming database.jsx exports the sub-sections data
import { Link } from "react-router-dom";

import {
  FaFacebook,
  FaTwitter,
  FaPinterestP,
  FaReddit,
  FaYoutube,
  FaInstagram,
  FaAngleDown,
  FaSearch,
  FaRegHeart,
  FaShoppingCart,
  FaRegUser,
  FaMapMarkerAlt,
  FaSync,
  FaInfoCircle,
} from "react-icons/fa";

import { FaPhoneVolume, FaLocationDot, FaHeadphones } from "react-icons/fa6";

import logo from "../../assets/logo.jpg";

export default function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <nav className="flex flex-col">
        {/* Top-nav */}
        <div className="bg-orange-400 py-2.5 text-white">
          <div className="container flex justify-between items-center">
            <div>
              <p className="text-sm text-center">
                Welcome to Csdil E-commerce Platform <br />{" "}
                <small>
                  Centre for Sustainable Development of Indigenious Lagosians
                </small>
              </p>
            </div>
            <div className="flex gap-5 items-center">
              <div className="flex gap-2 items-center border-r border-white px-5">
                <div>
                  <p className="text-sm tracking-widest">Follow us:</p>
                </div>
                <FaTwitter className="h-3.5 w-3.5" />
                <FaFacebook className="h-3.5 w-3.5" />
                <FaPinterestP className="h-3.5 w-3.5" />
                <FaReddit className="h-3.5 w-3.5" />
                <FaYoutube className="h-3.5 w-3.5" />
                <FaInstagram className="h-3.5 w-3.5" />
              </div>
              <div className="flex gap-2 items-center">
                <button className="flex gap-1.5 items-center">
                  <div>
                    <p className="text-sm tracking-wider">Eng</p>
                  </div>
                  <div>
                    <FaAngleDown className="h-3.5 w-3.5" />
                  </div>
                </button>
                <button className="flex gap-1.5 items-center">
                  <div>
                    <p className="text-sm tracking-wider">USD</p>
                  </div>
                  <div>
                    <FaAngleDown className="h-3.5 w-3.5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* New Mid Nav */}
        <div className="bg-orange-400 flex justify-center items-center w-full">
          <div className="flex gap-3 items-center">
            <p className="text-white font-semibold">Find anything in</p>
            <div className="flex bg-orange-100 p-1 gap-1 rounded-sm items-center">
              <FaLocationDot className="h-3 w-3" />
              <p className="text-sm font-medium">All Nigeria</p>
            </div>
          </div>
        </div>
        {/* Mid-nav */}
        <div className="bg-orange-400 py-2.5 text-white">
          <div className="container flex justify-between items-center gap-10 w-full">
            {/* LOGO */}
            <div className="w-1/4 flex items-center gap-3">
              <img src={logo} className="h-20 w-20 rounded-full" />
              <h3>About Csdil</h3>
            </div>
            {/* SEARCH */}
            <div className="flex flex-col-reverse gap-1 justify-center items-center w-1/2">
              <div className="bg-white rounded-sm w-full flex justify-between items-center p-3">
                <div className="w-11/12 text-gray-500">
                  <input
                    type="text"
                    placeholder="I am looking for..."
                    className="focus:outline-none w-full h-full bg-transparent text-xs"
                  />
                </div>
                <div className="w-1/12 flex justify-end">
                  <FaSearch className="h-3.5 w-3.5 text-gray-500" />
                </div>
              </div>
            </div>
            {/* REACTIONS */}
            <div className="w-1/4 flex justify-end items-center gap-8">
              <FaShoppingCart className="h-6 w-6" />
              <div className="flex gap-1">
                <div className="flex gap-1">
                  <Link to="/signup">
                    <p>Sign in | Registration</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom-nav */}
        <div className="py-2.5 border-b border-gray-50">
          <div className="container flex items-center w-full">
            <ul className="flex gap-10 items-center justify-between w-full">
              {subSections.map((section, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative flex items-center gap-2 cursor-pointer rounded-sm p-3 text-gray-500"
                  aria-haspopup="true"
                  aria-expanded={hoveredIndex === index}
                >
                  <p className="text-xs text-gray-500">{section.title}</p>
                  {/* Dropdown Menu */}
                  {hoveredIndex === index && (
                    <div className="fixed inset-0 flex justify-center z-30">
                      <ul
                        className={`mt-52 relative w-s80 bg-white border border-gray-200 rounded-md shadow-lg transform transition duration-200 ease-in-out origin-bottom scale-y-100 opacity-100`}
                        aria-hidden={hoveredIndex !== index}
                        style={{
                          display: "grid",
                          gridTemplateColumns:
                            section.items.length > 10
                              ? "repeat(5, 1fr)"
                              : "repeat(auto-fit, minmax(0, 1fr))",
                          gridTemplateRows:
                            "repeat(auto-fill, minmax(3rem, 1fr))",
                          maxHeight:
                            section.items.length > 10
                              ? "calc(10 * 3rem)"
                              : "none",
                          overflowY:
                            section.items.length > 10 ? "auto" : "visible",
                        }}
                      >
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            className="p-3 hover:bg-gray-100 cursor-pointer text-xs"
                            style={{
                              width:
                                section.items.length > 10
                                  ? "calc(90vw / 5)"
                                  : "auto",
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
