import { Footer } from "flowbite-react";
import React from "react";

function FooterComp({ container=true }) {
  return (
    <Footer container={true} className="mt-[75px] pb-4 bg-[#F9FAFB] pt-12">
      <div className={container ? "w-full text-center container mx-auto px-2 xl:px-0" : "w-full text-center"}>
        <div className="w-full justify-between flex items-center md:flex-row flex-col">
          <Footer.Brand
            href="/"
            src="/Logo.svg"
            alt="StayNest Logo"
            name="StayNest"
          />
          <Footer.LinkGroup className="w-fit mt-3 md:mt-0 mx-aut">
            <Footer.Link href="#" className="px-3 md:px-0">
              About Us
            </Footer.Link>
            <Footer.Link href="#" className="px-3 md:px-0">
              Privacy Policy
            </Footer.Link>
            <Footer.Link href="#" className="px-3 md:px-0">
              Impressum
            </Footer.Link>
            <Footer.Link href="#" className="px-3 md:px-0">
              Contact
            </Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="StayNest" year={2023} />
      </div>
    </Footer>
  );
}

export default FooterComp;
