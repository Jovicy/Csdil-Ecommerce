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
        <div className="bg-orange-400 md:py-2.5 py-4 text-white">
          <div className="container flex md:flex-row flex-col md:gap-0 gap-2 justify-between items-center">
            <div>
              <p className="text-sm text-center">
                Welcome to Csdil E-commerce Platform <br />{" "}
                <small>
                  Centre for Sustainable Development of Indigenious Lagosians
                </small>
              </p>
            </div>
            <div className="flex md:flex-row flex-col gap-5 items-center">
              <div className="flex gap-2 items-center px-5">
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
        <div className="bg-orange-400 md:py-2.5 py-4 text-white">
          <div className="container flex md:flex-row flex-col md:justify-between justify-center items-center md:gap-10 gap-5 w-full">
            {/* LOGO */}
            <div className="md:w-1/4 w-full flex md:flex-row flex-col justify-center items-center gap-3">
              <img src={logo} className="h-20 w-20 rounded-full" />
              <Link to="/about-us">
                <h3>About Csdil</h3>
              </Link>
            </div>
            {/* SEARCH */}
            <div className="flex flex-col-reverse gap-1 justify-center items-center md:w-1/2 w-full">
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
            <div className="md:w-1/4 w-full flex md:justify-end justify-center items-center gap-8">
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
        <div
          style={{
            py: 2.5,
            borderBottom: "1px solid #ddd",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div className="container flex items-center w-full">
            <ul
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                padding: 0,
                margin: 0,
                width: "100%",
                listStyle: "none",
              }}
            >
              {subSections.map((section, index) => (
                <li
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 10,
                    margin: 10,
                  }}
                >
                  <p style={{ fontSize: 12, color: "#666" }}>{section.title}</p>
                  {/* Dropdown Menu */}
                  {hoveredIndex === index && (
                    <div
                      style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 30,
                      }}
                    >
                      <ul
                        style={{
                          marginTop: 52,
                          position: "relative",
                          width: "80%",
                          backgroundColor: "#fff",
                          border: "1px solid #ddd",
                          borderRadius: 10,
                          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
                          transform: "translateY(0)",
                          transition: "transform 0.2s ease-in-out",
                        }}
                        aria-hidden={hoveredIndex !== index}
                      >
                        {section.items.map((item, i) => (
                          <li
                            key={i}
                            style={{
                              padding: 10,
                              fontSize: 12,
                              color: "#666",
                              cursor: "pointer",
                              borderBottom: "1px solid #ddd",
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
