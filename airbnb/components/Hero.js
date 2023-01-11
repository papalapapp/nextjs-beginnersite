import Image from "next/image";
import React from "react";
import Searchform from "./Searchform";

function Hero() {
  return (
    <>
      <div className="container mx-auto flex items-center justify-center h-[686px] relative rounded-none sm:rounded-3xl bg-center bg-cover costum-img mt-2">
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black/20 z-[2] rounded-none sm:rounded-3xl" />
        <div className="text-white z-[2] mt-[-10rem] text-center px-2">
          <h1 className="text-4xl md:text-5xl font-bold">
            Find your perfect vacation rental
          </h1>
          <p className="md:text-2xl text-xl mt-8 max-w-[620px] font-semibold mx-auto poppins">
            The ultimate solution for all your travel accommodation needs
          </p>
        </div>
        <Searchform />
      </div>
    </>
  );
}

export default Hero;
