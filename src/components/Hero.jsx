import React from 'react';
import heroImg from '../assets/hero image.jpg';

const Hero = () => {
  return (
    <section id="hero" className="text-white max-w-[1640px] h-screen max-h-[600px] pt-10 lg:pt-20 mx-4">
      <div className="h-full relative">
        {/* overlay */}
        <div className="absolute items-center w-full h-full text-gray-200 max-h-[500px] sm:max-h-[700px] bg-black/40 flex flex-col justify-center">
          <p className="pb-2 text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Save the date
          </p>
          <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Thomas
          </h1>
          <h1 className="px-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            &amp;
          </h1>
          <h1 className="px-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            Elizabeth
          </h1>
          <p className="m-1 text-sm sm:text-base md:text-lg lg:text-xl">
            Saturday, 6pm, 21.09.2025
          </p>
          <hr className="relative w-24 sm:w-32 border-full dark:bg-gray-700" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl">
            @ The Fullerton hotel, Ballroom
          </p>
        </div>
        <img className="w-full h-full max-h-[500px] sm:max-h-[600px] object-cover" src={heroImg} alt="hero" />
      </div>
    </section>
  );
};

export default Hero;
