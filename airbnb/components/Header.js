import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

function Header({ container=true }) {
  return (
    <Navbar fluid={!container} rounded={true} className="sticky top-0 z-20 bg-white/75 backdrop-blur-lg">
      <Navbar.Brand href="/">
        <Image
          src="/Logo.svg"
          alt="Airbnb Logo"
          width={54}
          height={54}
          style={{ objectFit: "contain" }}
          className="md:w-fit md:h-fit w-12 h-12"
        />
        <span className="ml-4 md:text-[40px] text-2xl font-bold">StayNest</span>
      </Navbar.Brand>
     
      <div className="flex">
        <button className="mr-4 md:mr-8 text-sm md:text-base py-2 px-5 border-2 rounded-full hover:scale-105 transition duration-200 ease-out active:bg-gray-100 hover:shadow-md ">
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
    </Navbar>
  );
}

export default Header;
