import { Carousel, Rating, Tooltip } from "flowbite-react";
import Image from "next/image";
import React from "react";

function PopularPlaces() {
  return (
    <section className="mt-[140px] container mx-auto px-3 xl:px-0">
      <h2 className="text-3xl lg:text-4xl font-bold">Popular Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 2xl:gap-10 mt-9">
        <div className="w-full h-[400px] bg-white rounded-3xl hover:drop-shadow-xl drop-shadow-lg hover:scale-[101%] overflow-hidden transition-all duration-300 ease-out relative ">
          {/* Like Btn */}
          <div className="absolute top-2 right-2 z-10">
            <Tooltip
              content="Um ein Objekt zu Liken müssen sie Angemeldet sein"
              placement="bottom"
              trigger="click"
            >
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 sm:h-10 sm:w-10 backdrop-blur-lg">
                <svg
                  className="w-6 h-6 text-white"
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
          <div className="w-full h-[55%]">
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
          <div className="p-4 h-[45%] flex flex-col justify-between ">
            <div>
              <h4 className="text-lg font-semibold poppins">
                Bodensee, Deutschland
              </h4>
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

        <div className="w-full h-[400px] bg-white rounded-3xl hover:drop-shadow-xl drop-shadow-lg hover:scale-[101%] overflow-hidden transition-all duration-300 ease-out relative ">
          {/* Like Btn */}
          <div className="absolute top-2 right-2 z-10">
            <Tooltip
              content="Um ein Objekt zu Liken müssen sie Angemeldet sein"
              placement="bottom"
              trigger="click"
            >
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 sm:h-10 sm:w-10 backdrop-blur-lg">
                <svg
                  className="w-6 h-6 text-white"
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
          <div className="w-full h-[55%]">
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
          <div className="p-4 h-[45%] flex flex-col justify-between ">
            <div>
              <h4 className="text-lg font-semibold poppins">
                Bodensee, Deutschland
              </h4>
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
                <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
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

        <div className="w-full h-[400px] bg-white rounded-3xl hover:drop-shadow-xl drop-shadow-lg hover:scale-[101%] overflow-hidden transition-all duration-300 ease-out relative ">
          {/* Like Btn */}
          <div className="absolute top-2 right-2 z-10">
            <Tooltip
              content="Um ein Objekt zu Liken müssen sie Angemeldet sein"
              placement="bottom"
              trigger="click"
            >
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 sm:h-10 sm:w-10 backdrop-blur-lg">
                <svg
                  className="w-6 h-6 text-white"
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
          <div className="w-full h-[55%]">
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
          <div className="p-4 h-[45%] flex flex-col justify-between ">
            <div>
              <h4 className="text-lg font-semibold poppins">
                Bodensee, Deutschland
              </h4>
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
                <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">
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

        <div className="w-full h-[400px] bg-white rounded-3xl hover:drop-shadow-xl drop-shadow-lg hover:scale-[101%] overflow-hidden transition-all duration-300 ease-out relative ">
          {/* Like Btn */}
          <div className="absolute top-2 right-2 z-10">
            <Tooltip
              content="Um ein Objekt zu Liken müssen sie Angemeldet sein"
              placement="bottom"
              trigger="click"
            >
              <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/30 hover:bg-white/50 sm:h-10 sm:w-10 backdrop-blur-lg">
                <svg
                  className="w-6 h-6 text-white"
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
          <div className="w-full h-[55%]">
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
          <div className="p-4 h-[45%] flex flex-col justify-between ">
            <div>
              <h4 className="text-lg font-semibold poppins">
                Bodensee, Deutschland
              </h4>
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
                <a
                  href="#"
                  className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
                >
                  73 reviews
                </a>
              </Rating>

              <div>
                <span className="font-semibold">300€</span>
                <span> / night</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PopularPlaces;
