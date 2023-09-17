"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image:
      "https://res.cloudinary.com/sohambasak/image/upload/v1694950084/flavor-fusion/zbjgxevv2dbigy5zx4aq.jpg",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image:
      "https://res.cloudinary.com/sohambasak/image/upload/v1694950084/flavor-fusion/rjvz0wcm81ltryyw4asg.jpg",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image:
      "https://res.cloudinary.com/sohambasak/image/upload/v1694950085/flavor-fusion/mibihvgzcfug2vmtdfci.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50">
      {/* TEST CONTAINER */}
      <div className="h-1/2 flex items-center justify-center flex-col gap-8 text-red-500 font-bold lg:h-full lg:w-1/2">
        <h1 className="text-4xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8">Order Now</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full h-1/2 relative lg:h-full lg:w-1/2">
        <Image
          src={data[currentSlide].image}
          alt="slide"
          fill
          className=" object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
