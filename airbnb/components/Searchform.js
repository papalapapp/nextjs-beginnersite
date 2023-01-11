import React, { useState } from "react";

function Searchform() {
  const [currentFocus, setCurrentFocus] = useState("")


  return (
    <form className="absolute bottom-[-32px] w-[97%] max-w-[990px] mx-auto min-h-[110px] bg-whit drop-shadow-xl z-[3] md:rounded-3xl rounded-3xl p-3 md:p-0  flex flex-wrap bg-white">
      <div className="flex-grow inline-flex flex-col relative h-[64px] md:h-[110px]">
        <input
          type="text"
          name="location"
          id="location"
          className="h-full pb-0 pt-6 md:pl-12 text-base active:border-none focus:border-none rounded-3xl hover:bg-gray-200 peer/location focus:bg-white focus:shadow-md bg-inherit border-none"
          placeholder="Where are you going?"
        />
        <label
          htmlFor="location"
          className="flex absolute md:text-2xl text-md font-semibold items-center md:top-5 md:left-5 top-2 left-3 peer-focus/location:text-sm"
        >
          <svg
            className="md:w-6 md:h-6 w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          Location
        </label>
      </div>
      <div className="flex-grow w-full md:w-fit inline-flex flex-col relative h-[64px] md:h-[110px] mt-1 md:mt-0">
        <input
          type="text"
          name="date"
          id="date"
          className="h-full pb-0 pt-6 md:pl-12 text-base active:border-none focus:border-none rounded-3xl hover:bg-gray-200 peer/date focus:bg-white focus:shadow-md bg-inherit border-none"
          placeholder="Add Date"
        />
        <label
          htmlFor="date"
          className="flex absolute md:text-2xl text-md font-semibold items-center md:top-5 md:left-5 top-2 left-3 peer-focus/date:text-sm truncate"
        >
          <svg
            className="md:w-6 md:h-6 w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Check In/Check Out
        </label>
        <div className="absolute top-1/2 transform translate-y-[-50%] left-0 w-[1px] bg-gray-300 h-1/2 md:block hidden"></div>

      </div>
      <div className="flex-grow md:max-w-[225px] inline-flex flex-col relative h-[64px] md:h-[110px] mt-1 md:mt-0">
        <input
          type="text"
          name="guests"
          id="guests"
          className="h-full pb-0 pt-6 md:pl-12 text-base active:border-none focus:border-none rounded-3xl hover:bg-gray-200 peer/guests focus:bg-white focus:shadow-md bg-inherit border-none"
          placeholder="Add Guests"
        />
        <label
          htmlFor="guests"
          className="flex absolute md:text-2xl text-md font-semibold items-center md:top-5 md:left-5 top-2 left-3 peer-focus/guests:text-sm"
        >
          <svg
            className="md:w-6 md:h-6 w-4 h-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          Guests
        </label>
        <div className="absolute top-1/2 transform translate-y-[-50%] left-0 w-[1px] bg-gray-300 h-1/2 md:block hidden"></div>
      </div>
      <button className="lg:w-[80px] lg:h-[80px] w-full h-[40px] rounded-full bg-[#FFC700] self-center lg:mr-12 lg:ml-6 flex justify-center items-center mx-4 mb-4 lg:mb-0 lg:mx-0 mt-3 md:mt-0 " type="submit" >
        <svg
          className="lg:w-7 lg:h-7 w-4 h-4 text-white"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <span className="lg:hidden inline text-white ml-2">Search</span>
      </button>
    </form>
  );
}

export default Searchform;
