import React from "react";

function Searchform() {
  return (
    <form class="absolute bottom-[-32px] w-[97%] max-w-[990px] mx-auto h-[110px] bg-whit drop-shadow-xl z-[3] rounded-3xl flex flex-wrap bg-white">
      <div class="flex-grow inline-flex flex-col relative">
        <input
          type="text"
          name="location"
          id="location"
          class="h-full pb-0 pt-6 pl-12 text-base border-none active:border-none rounded-3xl hover:bg-gray-200 peer/location focus:bg-white bg-inherit focus:border-none "
          placeholder="Where are you going?"
        />
        <label
          for="location"
          class="flex absolute text-2xl font-semibold items-center top-5 left-5 peer-focus/location:text-sm"
        >
          <svg
            class="w-6 h-6 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
          </svg>
          Location
        </label>
      </div>
      <div class="flex-grow inline-flex flex-col relative pl-4 pr-4">
        <input
          type="text"
          name="date"
          id="date"
          class="h-full pb-0 pt-6 pl-12 text-base active:border-none focus:border-none rounded-3xl hover:bg-gray-200 peer/date focus:bg-white focus:shadow-md bg-inherit border-none"
          placeholder="Add Date"
        />
        <label
          for="date"
          class="flex absolute text-2xl font-semibold items-center top-5 left-8 peer-focus/date:text-sm"
        >
          <svg
            className="w-6 h-6 mr-1"
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
        <div className="absolute top-1/2 transform translate-y-[-50%] left-0 w-[1px] bg-gray-300 h-1/2 "></div>

      </div>
      <div class="flex-grow max-w-[225px] inline-flex flex-col relative">
        <input
          type="text"
          name="guests"
          id="guests"
          class="h-full pb-0 pt-6 pl-12 text-base active:border-none focus:border-none rounded-3xl hover:bg-gray-200 peer/date focus:bg-white focus:shadow-md bg-inherit border-none"
          placeholder="Add Guests"
        />
        <label
          for="guests"
          class="flex absolute text-2xl font-semibold items-center top-5 left-5 peer-focus/date:text-sm"
        >
          <svg
            className="w-6 h-6 mr-1"
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
        <div className="absolute top-1/2 transform translate-y-[-50%] left-0 w-[1px] bg-gray-300 h-1/2 "></div>
      </div>
      <div className="w-[80px] h-[80px] rounded-full bg-[#FFC700] self-center mr-12 ml-6 flex justify-center items-center">
        <svg
          className="w-7 h-7 text-white"
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
      </div>
    </form>
  );
}

export default Searchform;