import React from "react";
import Image from "./hero.jpg"; // Replace with your image component or URL

export default function HeroSection() {
  return (
    <>
      <section className="bg-[#f1faee] pt-16 ">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 lg:px-6">
          {/* Content Part */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to BookLearner
            </h1>
            <p className="text-lg md:text-xl mb-8">Discover, Read, and Learn</p>
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md">
              Get Started
            </button>
          </div>

          {/* Image Part */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={Image}
              alt="Hero Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#f1faee"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,106.7C672,96,768,128,864,160C960,192,1056,224,1152,229.3C1248,235,1344,213,1392,202.7L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </>
  );
}
