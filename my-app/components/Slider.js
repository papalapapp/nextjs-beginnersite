import Image from "next/image";
import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function Slider({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const handleNextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const handlePrevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || length <= 0) {
    return null;
  }

  return (
    <div id="gallery" className="max-w-[1240px] mx-auto">
      <h2 className="text-2xl font-bold text-center p-4">Gallery</h2>
      <div className="relative p-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={
              index === current
                ? "opacity-[1] ease-in duration-1000"
                : "opacity-0"
            }
          >
            <FaArrowCircleLeft
              size={50}
              onClick={handlePrevSlide}
              className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
            />
            {index === current && (
            <div className="relative max-w-[100%] md:h-[400px] h-[300px]">
              <Image
                src={slide.image}
                alt="/"
                fill
                sizes="(max-width: 1240px) 100vw"
                style={{objectFit: "cover"}}
              />
            </div>
            )}
            <FaArrowCircleRight
              size={50}
              onClick={handleNextSlide}
              className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
