import { Badge, Carousel, Rating, Tooltip } from "flowbite-react";
import Image from "next/image";
import React from "react";
import AccomodationItems from "./AccomodationItems";

function SearchList() {
  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-1 gap-10 xl:pr-4 h-full w-full">
        <AccomodationItems stretched={true}/>
        <AccomodationItems stretched={true}/>
        <AccomodationItems stretched={true}/>
      </div>
    </>
  );
}

export default SearchList;
