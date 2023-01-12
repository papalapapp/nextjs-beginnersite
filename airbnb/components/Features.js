import React from "react";

function Features() {
  return (
    <section className="container mx-auto mt-[140px] px-2 xl:px-0">
      <h2 className="text-3xl lg:text-4xl font-bold text-center">
        Experience the comfort of a home away from home
      </h2>
      <p className="poppins text-center text-lg lg:text-xl text-gray-500 font-regular mt-4 max-w-[800px] mx-auto">
        We're a vacation rental platform that connects travelers with unique,
        comfortable, and convenient accommodations around the world.
      </p>
      <div className="flex flex-wrap mt-[64px] lg:justify-between justify-center">
        <div className="flex-grow text-center max-w-[400px] mt-0 lg:mt-0">
          <div className="bg-[#FFC700] rounded-xl w-12 h-12 flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
          </div>
          <h3 className="mt-5 text-xl font-bold">
            Wide Selection of Propertiers
          </h3>
          <p className="mt-2 poppins font-regular text-gray-500">
            With over 1 million properties to choose from, we have something for
            every budget and every preference.
          </p>
        </div>
        <div className="flex-grow text-center max-w-[400px] mt-6 lg:mt-0">
          <div className="bg-[#FFC700] rounded-xl w-12 h-12 flex items-center justify-center mx-auto">
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              />
            </svg>
          </div>
          <h3 className="mt-5 text-xl font-bold">
            Convenient booking and payment
          </h3>
          <p className="mt-2 poppins font-regular text-gray-500">
            StayNest's platform makes it easy to search for and book rentals,
            with a secure online booking system and a variety of payment
            options.
          </p>
        </div>
        <div className="flex-grow text-center max-w-[400px] mt-6 lg:mt-0">
          <div className="bg-[#FFC700] rounded-xl w-12 h-12 flex items-center justify-center mx-auto">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
              />
            </svg>
          </div>
          <h3 className="mt-5 text-xl font-bold">Customer support</h3>
          <p className="mt-2 poppins font-regular text-gray-500">
            24/7 customer support to assist with any questions or issues that
            may arise during the booking process or during a stay.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
