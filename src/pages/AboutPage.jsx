/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React from "react";
import Newsletter from "../components/newsletter/index";
import WhoweareImg from "../assets/whoweare-img.jpeg";
import MisVisImg from "../assets/mission-img.jpeg";

// Database File
import { teams } from "../data/database";

const AboutPage = () => {
  return (
    <>
      {/* Main About Page Content */}
      {/* Who we are section */}
      <section className="py-16">
        <div className="container flex md:flex-row flex-col-reverse justify-between items-center gap-10">
          {/* who we are content */}
          <div className="md:w-1/2 w-full flex flex-col gap-6">
            <div>
              {/* who we are tag */}
              <h1 className="bg-blue-500 px-2 py-4 md:w-fit w-auto md:text-right text-center rounded-sm font-semibold text-sm text-gray-50">
                Who We Are
              </h1>
            </div>
            <div className="flex flex-col gap-6 md:text-left text-center">
              <h1 className="md:text-4xl text-2xl font-bold">
                About Centre for Sustainability Development for Indigenous
                Lagosians (CSDIL)
              </h1>
              <p className="text-base font-normal text-gray-700 leading-7">
                The Centre for Sustainability Development for Indigenous
                Lagosians (CSDIL) was founded to promote sustainable living and
                development for the indigenous communities of Lagos. We are
                dedicated to providing resources and products that empower
                individuals, promote eco-friendly practices, and preserve the
                rich cultural heritage of Lagos. At CSDIL, we believe in a
                future where development and sustainability go hand in hand.
              </p>
            </div>
          </div>
          {/* who we are img */}
          <div className="md:w-1/2 w-full">
            <img
              src={WhoweareImg}
              alt="about-img"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10">
        <div className="container flex md:flex-row flex-col justify-between items-center gap-10">
          {/* M&V img */}
          <div className="md:w-1/2 w-full">
            <img
              src={MisVisImg}
              alt="about-img"
              className="w-full rounded-2xl"
            />
          </div>
          {/* who we are content */}
          <div className="md:w-1/2 w-full flex flex-col gap-4 md:text-left text-center">
            <h1 className="md:text-4xl text-2xl font-bold">Our Mission and Vision</h1>
            <p className="text-base font-normal text-gray-700 leading-7">
              Our mission is twofold: to provide high-quality, sustainable
              products to our customers and to foster development that benefits
              indigenous Lagosians. We envision a thriving community where
              economic growth is achieved without compromising the environment
              or cultural heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team Members */}
      <section className="py-10">
        <div className="container flex flex-col justify-center items-center gap-10">
          {/* Team Title */}
          <div>
            <h1 className="text-center font-bold md:text-4xl text-2xl">Meet Our Team</h1>
          </div>
          {/* Tam Member */}
          <div className="w-full flex flex-wrap justify-around gap-x-2 gap-y-5">
            {teams.map((team) => (
              <div className="md:w-30 w-full p-6 border border-gray-200 rounded flex gap-4 items-center">
                <div>
                  <img
                    src={team.img}
                    className="rounded-full w-16 h-16"
                    alt="team member image"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-semibold">{team.name}</h3>
                  <p className="text-sm text-gray-700 font-normal">
                    {team.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
    </>
  );
};

export default AboutPage;
