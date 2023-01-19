import { Carousel, Rating, Tooltip } from "flowbite-react";
import Image from "next/image";
import React from "react";
import AccomodationItems from "./AccomodationItems";

function PopularPlaces() {
  return (
    <section className="mt-[140px] container mx-auto px-3 xl:px-0">
      <h2 className="text-3xl lg:text-4xl font-bold">Popular Places</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 2xl:gap-10 xl:mt-8 md:mt-6 mt-4">
        
        <AccomodationItems stretched={false} />
        <AccomodationItems stretched={false} />
        <AccomodationItems stretched={false} />
        <AccomodationItems stretched={false} />

      </div>
    </section>
  );
}

export default PopularPlaces;
