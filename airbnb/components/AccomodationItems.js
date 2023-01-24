import { Carousel, Rating, Tooltip } from "flowbite-react";
import Image from "next/image";
import React from "react";

function AccomodationItems({ stretched, data }) {
  return (
    <>
      <div className={stretched ? "flex flex-col lg:flex-row w-full lg:h-[250px] h-[400px] bg-white rounded-3xl hover:shadow-xl shadow-lg hover:scale-[101%] overflow-hidden transition-all duration-300 ease-out relative" : "flex flex-col w-full h-[410px] bg-white rounded-3xl hover:shadow-xl shadow-lg hover:scale-[101%] overflow-hidden transition-all duration-300 ease-out relative "}>
        {/* Like Btn */}
        <div className="absolute top-2 right-2 z-10">
          <Tooltip
            content="Um ein Objekt zu Liken müssen sie Angemeldet sein"
            placement="bottom"
            trigger="click"
            className="w-[200px]"
          >
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 sm:h-10 sm:w-10 backdrop-blur-lg">
              <svg
                className={stretched ? "w-6 h-6 lg:text-black text-white" : "w-6 h-6 text-white"}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </Tooltip>
        </div>
        {/* Image Carousel */}
        <div className={stretched ? "lg:w-1/3 lg:min-w-[300px]  lg:h-full h-[53%] w-full" :  "w-full h-[53%]"}>
          <Carousel slide={false} indicators={false} className="p-0">
            <Image
              alt="Picture 1"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-51496208/original/0bbc2095-d3b1-44db-9d37-233b8a465b46.jpeg?im_w=720"
              width={720}
              height={480}
              className="h-full"
              style={{ objectFit: "cover" }}
            />

            <Image
              alt="Picture 1"
              src="https://a0.muscache.com/im/pictures/0cbffe2d-fac9-4ebd-a1ab-ad74b1abc234.jpg?im_w=720"
              width={720}
              height={480}
              className="h-full"
              style={{ objectFit: "cover" }}
            />

            <Image
              alt="Picture 1"
              src="https://a0.muscache.com/im/pictures/9a52bedb-3eba-4cd1-966d-6450937347c6.jpg?im_w=720"
              width={720}
              height={480}
              className="h-full"
              style={{ objectFit: "cover" }}
            />
          </Carousel>
        </div>
        {/* Card Body */}
        <div className={stretched ? "lg:p-5 p-4 lg:h-full flex-grow flex flex-col justify-between" : "h-[48%] lg:p-5 p-4 flex-grow flex flex-col justify-between"}>
          <div>
              
            <h4 className="text-lg font-semibold poppins">
              Bodensee, Deutschland
            </h4>
            <div className="w-fit felx items-center font-semibold bg-blue-100 text-blue-800 rounded px-2 py-1 text-sm mt-1 flex">
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                />
              </svg>
              Superhost
            </div>
            <p className="poppins mt-2 text-gray-500">
              Cozy lakefront vacation home with stunning views.
            </p>
          </div>

          <div className="flex justify-between w-full ">
            <Rating>
              <Rating.Star />
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                4.95
              </p>
              <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
              <span className="text-sm font-medium text-gray-800 underline hover:no-underline dark:text-white">
                73 reviews
              </span>
            </Rating>

            <div>
              <span className="font-semibold">300€</span>
              <span> / night</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AccomodationItems;
