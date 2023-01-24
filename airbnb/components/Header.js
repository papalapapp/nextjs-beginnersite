import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useScrollheight from "../hooks/useScrollheight";
import Searchform from "./Searchform";

function Header({ container = true, searchBarShowingHeight = 0 }) {
  const [isSearching, setIsSearching] = useState(false);
  const { height } = useScrollheight();

  console.log(height);

  useEffect(() => {
    if (!isSearching) return;

    const handleScroll = () => {
      setIsSearching(false)
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isSearching]);

  return (
    <>
      <Navbar
        fluid={!container}
        rounded={true}
        className="sticky top-0 z-20 bg-white/75 backdrop-blur-lg"
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/Logo.svg"
            alt="Airbnb Logo"
            width={54}
            height={54}
            style={{ objectFit: "contain" }}
            className="md:w-fit md:h-fit w-12 h-12"
          />

          <span className="ml-4 md:text-[40px] text-2xl font-bold">
            StayNest
          </span>
        </Link>

        <div
          className={
            height >= searchBarShowingHeight
              ? "relative hover:scale-105 transition duration-200 ease-out lg:w-[22%] w-[100px] opacity-1 pointer-events-auto"
              : "relative hover:scale-105 transition duration-200 ease-out lg:w-[22%] w-[100px] opacity-0 pointer-events-none"
          }
          onClick={() => setIsSearching(true)}
        >
          <input
            type="text"
            placeholder="Start your Search"
            className="border-1 border-gray-200 rounded-full py-2 drop-shadow w-full"
            onChange={() => setIsSearching(true)}
          />
          <div className="absolute top-1/2 translate-y-[-50%] right-2 rounded-full bg-[#FFC700] w-7 h-7 flex justify-center items-center">
            <svg
              className="w-4 h-4 text-white "
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
        </div>

        <div className="flex">
          <button className="hidden sm:block mr-4 md:mr-8 text-sm md:text-base py-2 px-5 border-2 rounded-full hover:scale-105 transition duration-200 ease-out active:bg-gray-100 hover:shadow-md ">
            Become a Host
          </button>
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={
              <div className="flex justify-between items-center border-2 rounded-full pl-2 hover:shadow-md py-1 pr-1 hover:scale-105 transition duration-200 ease-out active:bg-gray-100">
                <svg
                  className="w-6 h-6 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <Avatar rounded={true} size="sm" />
              </div>
            }
            className="shadow-xl rounded-xl"
          >
            {/* <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header> */}
            <Dropdown.Item>Anmelden</Dropdown.Item>
            <Dropdown.Item>Registrieren</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Passwort vergessen</Dropdown.Item>
          </Dropdown>
        </div>
        {/* <Navbar.Collapse>
        <Navbar.Link href="/navbars" active={true}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
        <Navbar.Link href="/navbars">Pricing</Navbar.Link>
        <Navbar.Link href="/navbars">Contact</Navbar.Link>
      </Navbar.Collapse> */}

        <div
          className={
            isSearching
              ? "absolute lg:top-[-20px] md:top-[-125px] top-[-20px] w-full max-w-[1000px] left-1/2 translate-x-[-50%] bg-blue-20 lg:h-[110px] h-[280px] flex justify-center scale-100 transition-all duration-500 ease-in-out opacity-1"
              : "absolute lg:top-[-20px] md:top-[-125px] top-[-20px] w-full max-w-[1000px] left-1/2 translate-x-[-50%] bg-blue-20 lg:h-[110px] h-[280px] flex justify-center scale-50 transition-translate duration-300 ease-in-out opacity-0 pointer-events-none"
          }
        >
          <Searchform />
        </div>
      </Navbar>
      {/* overlay */}

      <div
        className={
          isSearching
            ? "fixed h-full w-screen bg-black/60 opacity-1 z-10 cursor-pointer transition-all duration-200 ease-in "
            : "fixed h-fit w-fit bg-black/10 opacity-0 z-10 transition-all duration-200 ease-in"
        }
        onClick={() => setIsSearching(false)}
      ></div>
    </>
  );
}

export default Header;
