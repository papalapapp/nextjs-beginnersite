import Image from "next/image";
import React from "react";

function BecomeHostBanner() {
  return (
    <section className="container mx-auto mt-[156px] mb-12">
      <div className="bg-[#EAF3FF] lg:h-[356px] h-[470px] sm:rounded-3xl drop-shadow-none md:drop-shadow-xl  relative overflow-hidden">
        <div className="md:pl-12 pt-12 xl:ml-4 lg:pr-0 pr-8 pl-8">
          <h3 className="md:text-4xl text-3xl font-bold">Become a Host</h3>
          <p className="poppins text-xl text-gray-500 mt-4 xl:max-w-[740px] lg:max-w-[570px] ">
            Are you looking to turn your extra space into a profitable vacation
            rental? Look no further than StayNest! Our platform makes it easy
            for homeowners to advertise their holiday homes and earn extra
            income by renting them out to travelers.
          </p>
          <button className="px-6 py-2 bg-[#FFC700] rounded-lg flex mt-10 group/btn hover:shadow-lg transition-shadow duration-200">
            Get Started
            <svg
              className="w-6 h-6 ml-2 group-hover/btn:translate-x-2 transition-all duration-200 ease-out"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              />
            </svg>
          </button>
        </div>
        <div className="absolute bg-green-200 right-0 bottom-0 xl:w-fit md:w-[370px] w-[200px] ">
          <Image
            src="/becomeHost.png"
            width={500}
            height={356}
            className="z-[1]"
            alt="3D Illustration about turism"
          />
        </div>
      </div>
    </section>
  );
}

export default BecomeHostBanner;
